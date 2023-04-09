const mongoose = require("mongoose");

const workExpenseSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	workId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Work",
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	paidWorkers: {
		type: Boolean,
		default: false,
	},
});

const WorkExpense = mongoose.model("WorkExpense", workExpenseSchema);

module.exports = WorkExpense;
