const WorkExpense = require("../models/workExpenseModel");

const createWorkExpense = async (workExpenseData) => {
	const workExpense = new WorkExpense(workExpenseData);
	return await workExpense.save();
};

const updateWorkExpense = async (workExpenseId, workExpenseData) => {
	return await WorkExpense.findByIdAndUpdate(workExpenseId, workExpenseData, {
		new: true,
	});
};

const deleteWorkExpense = async (workExpenseId) => {
	return await WorkExpense.findByIdAndDelete(workExpenseId);
};

const getWorkExpenses = async () => {
	return await WorkExpense.find();
};

const getWorkExpenseById = async (workExpenseId) => {
	return await WorkExpense.findById(workExpenseId);
};

const getWorkExpensesByWorkId = async (workId) => {
	return await WorkExpense.find({ work_id: workId });
};

module.exports = {
	createWorkExpense,
	updateWorkExpense,
	deleteWorkExpense,
	getWorkExpenses,
	getWorkExpenseById,
	getWorkExpensesByWorkId,
};
