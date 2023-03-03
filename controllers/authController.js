const authService = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await authService.signup(name, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
