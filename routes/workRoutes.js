const express = require("express");
const router = express.Router();
const workController = require("../controllers/workController");
const auth = require("../middlewares/authMiddleware");

// Create a work
router.post("/", auth, workController.createWork);

// Update a work
router.put("/:id", auth, workController.updateWork);

// Delete a work
router.delete("/:id", auth, workController.deleteWork);

// Get all works
router.get("/", auth, workController.getWorks);

// Get all works for a user
router.get("/user", auth, workController.getWorksByUserId);

// Get a work by ID
router.get("/:id", auth, workController.getWorkById);

// Update a work status
router.put("/:id/status", auth, workController.updateWorkStatus);

module.exports = router;
