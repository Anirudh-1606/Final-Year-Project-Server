const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
	workerId: {
		type: String,
		required: true,
		unique: true,
	},
	workId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Work",
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
	},
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;
