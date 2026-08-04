import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    limit: {
      type: Number,
      required: true,
      min: 0,
    },

    spent: {
      type: Number,
      default: 0,
      min: 0,
    },

    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },

    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;