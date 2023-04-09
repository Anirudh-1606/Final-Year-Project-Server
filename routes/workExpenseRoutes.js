const express = require("express");
const router = express.Router();
const workExpenseController = require("../controllers/workExpenseController");
const auth = require("../middlewares/authMiddleware");

// Create a work expense for a work
router.post("/:workId", auth, workExpenseController.createWorkExpense);

// Update a work expense
router.put("/:id", auth, workExpenseController.updateWorkExpense);

// Delete a work expense
router.delete("/:id", auth, workExpenseController.deleteWorkExpense);

// Get all work expenses
router.get("/", auth, workExpenseController.getWorkExpenses);

// Get a work expense by ID
router.get("/:id", auth, workExpenseController.getWorkExpenseById);

// Get all work expenses for a work
router.get(
	"/work/:workId",
	auth,
	workExpenseController.getWorkExpensesByWorkId,
);

module.exports = router;
