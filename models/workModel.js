const mongoose = require("mongoose");
const { Schema } = mongoose;

const workSchema = new mongoose.Schema({
	workId: {
		type: mongoose.Types.ObjectId, // use mongoose.Types.ObjectId here
		default: () => new mongoose.Types.ObjectId(), // use the mongoose.Types.ObjectId() method to create a new ObjectId
	},
	quotation: {
		type: Number,
	},
	workOrder: {
		type: String,
	},
	bill: {
		type: Number,
	},
	address: {
		type: String,
		required: true,
	},
	pinCode: { type: Number, required: true },
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: [
			"pending",
			"in progress",
			"completed",
			"awaiting for payment",
			"rejected",
			"accepted",
			"at laboratory",
		],
		default: "pending",
	},
	services: {
		type: String,
		enum: ["soil samples", "rock drilling", "penetration testing"],
	},
	startDate: {
		type: Date,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	endDate: {
		type: Date,
	},
	workPayment: {
		type: String,
	},
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
