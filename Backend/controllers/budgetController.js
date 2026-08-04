import Budget from "../models/Budget.js";

export const createBudget = async (req, res) => {
  try {
    const budget = await Budget.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      budget,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({
      user: req.user._id,
    }).populate("category");

    res.json({
      success: true,
      count: budgets.length,
      budgets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        message: "Budget not found",
      });
    }

    Object.assign(budget, req.body);

    await budget.save();

    res.json({
      success: true,
      budget,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        message: "Budget not found",
      });
    }

    await budget.deleteOne();

    res.json({
      success: true,
      message: "Budget deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};