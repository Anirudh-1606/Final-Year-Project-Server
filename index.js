const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const workRoutes = require("./routes/workRoutes");
const workerRoutes = require("./routes/workerRoutes");
const workExpenseRoutes = require("./routes/workExpenseRoutes");

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/works", workRoutes);
app.use("/workers", workerRoutes);
app.use("/work-expenses", workExpenseRoutes);

// Start server
mongoose
	.connect("mongodb://localhost/myapp", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to database");
		// Start server
		app.listen(2000, () => {
			console.log("Server started on port 2000");
		});
	})
	.catch((err) => {
		console.error(err);
	});
