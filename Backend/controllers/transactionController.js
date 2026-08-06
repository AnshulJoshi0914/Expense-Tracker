import Transaction from "../models/Transaction.js";
import Budget from "../models/Budget.js";

export const createTransaction = async (req, res) => {
  try {
    const {
      title,
      amount,
      type,
      category,
      paymentMethod,
      note,
      date,
    } = req.body;

    const transaction = await Transaction.create({
      user: req.user._id,
      title,
      amount,
      type,
      category,
      paymentMethod,
      note,
      date,
    });

    if (type === "expense") {
      await Budget.findOneAndUpdate(
        {
          user: req.user._id,
          category,
          month: new Date(date).getMonth() + 1,
          year: new Date(date).getFullYear(),
        },
        {
          $inc: {
            spent: amount,
          },
        }
      );
    }

    res.status(201).json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    })
      .populate("category")
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("category");

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    // Remove old expense from budget
    if (transaction.type === "expense") {
      await Budget.findOneAndUpdate(
        {
          user: req.user._id,
          category: transaction.category,
          month: new Date(transaction.date).getMonth() + 1,
          year: new Date(transaction.date).getFullYear(),
        },
        {
          $inc: {
            spent: -transaction.amount,
          },
        }
      );
    }

    Object.assign(transaction, req.body);

    await transaction.save();

    // Add updated expense to budget
    if (transaction.type === "expense") {
      await Budget.findOneAndUpdate(
        {
          user: req.user._id,
          category: transaction.category,
          month: new Date(transaction.date).getMonth() + 1,
          year: new Date(transaction.date).getFullYear(),
        },
        {
          $inc: {
            spent: transaction.amount,
          },
        }
      );
    }

    res.json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    // Remove expense from budget
    if (transaction.type === "expense") {
      await Budget.findOneAndUpdate(
        {
          user: req.user._id,
          category: transaction.category,
          month: new Date(transaction.date).getMonth() + 1,
          year: new Date(transaction.date).getFullYear(),
        },
        {
          $inc: {
            spent: -transaction.amount,
          },
        }
      );
    }

    await transaction.deleteOne();

    res.json({
      success: true,
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};