import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
} from "../controllers/budgetController.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .get(getBudgets)
  .post(createBudget);

router
  .route("/:id")
  .put(updateBudget)
  .delete(deleteBudget);

export default router;