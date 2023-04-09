const workerService = require("../services/workerService");

const createWorker = async (req, res) => {
	try {
		const workerData = {
			work_id: req.params.workId,
			start_date: req.body.start_date,
			end_date: req.body.end_date,
		};
		const worker = await workerService.createWorker(workerData);
		res.json({ message: "Worker created successfully", worker });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating worker" });
	}
};

const updateWorker = async (req, res) => {
	try {
		const worker = await workerService.updateWorker(req.params.id, req.body);
		if (!worker) {
			return res.status(404).json({ message: "Worker not found" });
		}
		res.json({ message: "Worker updated successfully", worker });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating worker" });
	}
};

const deleteWorker = async (req, res) => {
	try {
		const worker = await workerService.deleteWorker(req.params.id);
		if (!worker) {
			return res.status(404).json({ message: "Worker not found" });
		}
		res.json({ message: "Worker deleted successfully", worker });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error deleting worker" });
	}
};

const getWorkers = async (req, res) => {
	try {
		const workers = await workerService.getWorkers();
		res.json(workers);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting workers" });
	}
};

const getWorkerById = async (req, res) => {
	try {
		const worker = await workerService.getWorkerById(req.params.id);
		if (!worker) {
			return res.status(404).json({ message: "Worker not found" });
		}
		res.json(worker);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting worker" });
	}
};

const getWorkersByWorkId = async (req, res) => {
	try {
		const workers = await workerService.getWorkersByWorkId(req.params.workId);
		res.json(workers);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting workers" });
	}
};

module.exports = {
	createWorker,
	updateWorker,
	deleteWorker,
	getWorkers,
	getWorkerById,
	getWorkersByWorkId,
};
