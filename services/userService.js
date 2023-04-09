const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
	const hashedPassword = await bcrypt.hash(userData.password, 10); // 10 is the number of salt rounds
	const user = new UserModel({
		firstName: userData.firstName,
		lastName: userData.lastName,
		email: userData.email,
		password: hashedPassword,
		phone: userData.phone,
		address1: userData.address1,
		address2: userData.address2,
		location: {
			city: userData.city,
			district: userData.district,
			state: userData.state,
		},
	});
	return user.save();
};

const updateUser = async (userId, userData) => {
	return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
};

const deleteUser = async (userId) => {
	return await UserModel.findByIdAndDelete(userId);
};

const getUsers = async () => {
	const users = await UserModel.find().select("-password");
	return users;
};
const findUserByEmail = async (email) => {
	try {
		const user = await UserModel.findOne({ email });
		return user;
	} catch (err) {
		console.error(err);
		throw err;
	}
};

async function getUserById(id) {
	try {
		const user = await UserModel.findById(id)
			.select("-password")
			.populate("location", "-_id -__v");
		return user;
	} catch (error) {
		throw new Error(error.message);
	}
}

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getUsers,
	getUserById,
	findUserByEmail,
};
