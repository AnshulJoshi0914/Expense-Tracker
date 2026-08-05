import Transaction from "../models/Transaction.js";

export const getDashboard = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    })
      .populate("category")
      .sort({ date: -1 });

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    });

    const totalSavings = totalIncome - totalExpense;

    const recentTransactions = transactions.slice(0, 5);

    const categoryMap = {};

    transactions.forEach((transaction) => {
      if (transaction.type !== "expense") return;

      const name = transaction.category?.name || "Other";

      categoryMap[name] =
        (categoryMap[name] || 0) + transaction.amount;
    });

    const categoryAnalytics = Object.keys(categoryMap).map((key) => ({
      category: key,
      amount: categoryMap[key],
    }));

    const dailyMap = {};

    transactions.forEach((transaction) => {
      if (transaction.type !== "expense") return;

      const day = new Date(transaction.date).toLocaleDateString();

      dailyMap[day] =
        (dailyMap[day] || 0) + transaction.amount;
    });

    const dailyExpenses = Object.keys(dailyMap).map((day) => ({
      day,
      amount: dailyMap[day],
    }));

    res.json({
      success: true,

      summary: {
        totalIncome,
        totalExpense,
        totalSavings,
        transactionCount: transactions.length,
      },

      recentTransactions,

      categoryAnalytics,

      dailyExpenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};