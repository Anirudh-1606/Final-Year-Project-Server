const userService = require("../services/userService");

const createUser = async (req, res) => {
	try {
		const user = await userService.createUser(req.body);
		res.json({ message: "User created successfully", user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating user" });
	}
};

const updateUser = async (req, res) => {
	try {
		const user = await userService.updateUser(req.params.id, req.body);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ message: "User updated successfully", user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating user" });
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = await userService.deleteUser(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ message: "User deleted successfully", user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error deleting user" });
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting users" });
	}
};

const getUserById = async (req, res) => {
	try {
		const user = await userService.getUserById(req.params.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting user" });
	}
};

module.exports = { createUser, updateUser, deleteUser, getUsers, getUserById };
