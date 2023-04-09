const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
	city: {
		type: String,
	},
	district: {
		type: String,
	},
	state: {
		type: String,
	},
	pinCode: {
		type: String,
	},
});

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address1: {
		type: String,
		required: true,
	},
	address2: {
		type: String,
	},
	location: {
		type: locationSchema,
		required: true,
	},
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
