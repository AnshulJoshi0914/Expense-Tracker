import Transaction from "../models/Transaction.js";

export const getReportSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).populate("category");

    let totalIncome = 0;
    let totalExpense = 0;

    const categoryMap = {};
    const monthlyMap = {};

    transactions.forEach((t) => {
      if (t.type === "income") {
        totalIncome += t.amount;
      } else {
        totalExpense += t.amount;

        const category = t.category?.name || "Other";

        categoryMap[category] =
          (categoryMap[category] || 0) + t.amount;

        const month = new Date(t.date).toLocaleString("default", {
          month: "short",
        });

        if (!monthlyMap[month]) {
          monthlyMap[month] = {
            month,
            income: 0,
            expense: 0,
          };
        }

        monthlyMap[month].expense += t.amount;
      }

      if (t.type === "income") {
        const month = new Date(t.date).toLocaleString("default", {
          month: "short",
        });

        if (!monthlyMap[month]) {
          monthlyMap[month] = {
            month,
            income: 0,
            expense: 0,
          };
        }

        monthlyMap[month].income += t.amount;
      }
    });

    const monthlyTrend = Object.values(monthlyMap);

    const categoryBreakdown = Object.keys(categoryMap).map((key) => ({
      name: key,
      value: categoryMap[key],
    }));

    res.json({
      success: true,

      summary: {
        totalIncome,
        totalExpense,
        totalSavings: totalIncome - totalExpense,
        cashFlow: totalIncome - totalExpense,
      },

      monthlyTrend,

      categoryBreakdown,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};