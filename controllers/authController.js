const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { findUserByEmail, getUserById } = require("../services/userService");

const register = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		phone,
		address1,
		address2,
		location,
	} = req.body;

	try {
		// Check if user already exists
		const existingUser = await findUserByEmail(email);
		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user object
		const newUser = new User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			phone,
			address1,
			address2,
			location,
		});

		// Save new user to database
		const savedUser = await newUser.save();

		// Generate JWT token
		const token = jwt.sign(
			{ userId: savedUser._id, email: savedUser.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" },
		);

		// Send token and user data back to client
		res.status(201).json({ token, user: savedUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const login = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const user = await findUserByEmail(email);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const isPasswordMatched = await bcrypt.compare(password, user.password);

		if (!isPasswordMatched) {
			return res.status(401).json({ message: "Invalid password" });
		}

		const token = jwt.sign(
			{ userId: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" },
		);

		const userWithLocation = await getUserById(user._id);

		res.json({ token, user: userWithLocation });
	} catch (error) {
		next(error);
	}
};

module.exports = { register, login };
