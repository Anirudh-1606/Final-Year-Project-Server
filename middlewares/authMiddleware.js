const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res
			.status(401)
			.json({ message: "Authentication failed: no token provided" });
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findOne({
			_id: decodedToken.userId,
		});

		if (!user) {
			throw new Error();
		}

		req.user = user;
		req.token = token;
		next();
	} catch (error) {
		return res
			.status(401)
			.json({ message: "Authentication failed: invalid token" });
	}
};

module.exports = auth;
