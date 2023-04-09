const express = require("express");
const router = express.Router();
const workerController = require("../controllers/workerController");
const auth = require("../middlewares/authMiddleware");

// Create a worker for a work
router.post("/:workId", auth, workerController.createWorker);

// Update a worker
router.put("/:id", auth, workerController.updateWorker);

// Delete a worker
router.delete("/:id", auth, workerController.deleteWorker);

// Get all workers
router.get("/", auth, workerController.getWorkers);

// Get a worker by ID
router.get("/:id", auth, workerController.getWorkerById);

// Get all workers for a work
router.get("/work/:workId", auth, workerController.getWorkersByWorkId);

module.exports = router;
