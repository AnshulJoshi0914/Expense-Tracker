import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .get(getTransactions)
  .post(createTransaction);

router
  .route("/:id")
  .get(getTransactionById)
  .put(updateTransaction)
  .delete(deleteTransaction);

export default router;