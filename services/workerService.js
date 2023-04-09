const Worker = require("../models/workerModel");

const createWorker = async (workerData) => {
	const worker = new Worker(workerData);
	return await worker.save();
};

const updateWorker = async (workerId, workerData) => {
	return await Worker.findByIdAndUpdate(workerId, workerData, { new: true });
};

const deleteWorker = async (workerId) => {
	return await Worker.findByIdAndDelete(workerId);
};

const getWorkers = async () => {
	return await Worker.find();
};

const getWorkerById = async (workerId) => {
	return await Worker.findById(workerId);
};

const getWorkersByWorkId = async (workId) => {
	return await Worker.find({ work_id: workId });
};

module.exports = {
	createWorker,
	updateWorker,
	deleteWorker,
	getWorkers,
	getWorkerById,
	getWorkersByWorkId,
};
