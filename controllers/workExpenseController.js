const workExpenseService = require("../services/workExpenseService");

const createWorkExpense = async (req, res) => {
	try {
		const workExpenseData = {
			work_id: req.params.workId,
			cost: req.body.cost,
			description: req.body.description,
			date: req.body.date,
			paid_workers: req.body.paid_workers,
		};
		const workExpense = await workExpenseService.createWorkExpense(
			workExpenseData,
		);
		res.json({ message: "Work expense created successfully", workExpense });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating work expense" });
	}
};

const updateWorkExpense = async (req, res) => {
	try {
		const workExpenseData = {
			cost: req.body.cost,
			description: req.body.description,
			date: req.body.date,
			paid_workers: req.body.paid_workers,
		};
		const updatedWorkExpense = await workExpenseService.updateWorkExpense(
			req.params.id,
			workExpenseData,
		);
		if (!updatedWorkExpense) {
			return res.status(404).json({ message: "Work expense not found" });
		}
		res.json({
			message: "Work expense updated successfully",
			workExpense: updatedWorkExpense,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating work expense" });
	}
};

const deleteWorkExpense = async (req, res) => {
	try {
		const deletedWorkExpense = await workExpenseService.deleteWorkExpense(
			req.params.id,
		);
		if (!deletedWorkExpense) {
			return res.status(404).json({ message: "Work expense not found" });
		}
		res.json({
			message: "Work expense deleted successfully",
			workExpense: deletedWorkExpense,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error deleting work expense" });
	}
};

const getWorkExpenses = async (req, res) => {
	try {
		const workExpenses = await workExpenseService.getWorkExpenses();
		res.json(workExpenses);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching work expenses" });
	}
};

const getWorkExpenseById = async (req, res) => {
	try {
		const workExpense = await workExpenseService.getWorkExpenseById(
			req.params.id,
		);
		if (!workExpense) {
			return res.status(404).json({ message: "Work expense not found" });
		}
		res.json(workExpense);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching work expense" });
	}
};

const getWorkExpensesByWorkId = async (req, res) => {
	try {
		const workExpenses = await workExpenseService.getWorkExpensesByWorkId(
			req.params.workId,
		);
		res.json(workExpenses);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching work expenses for work" });
	}
};

module.exports = {
	createWorkExpense,
	updateWorkExpense,
	deleteWorkExpense,
	getWorkExpenses,
	getWorkExpenseById,
	getWorkExpensesByWorkId,
};
