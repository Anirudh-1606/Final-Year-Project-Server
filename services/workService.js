const Work = require("../models/workModel");
const mongoose = require("mongoose");

const createWork = async (workData) => {
	return await Work.create(workData);
};

const updateWork = async (workId, workData) => {
	return await Work.findByIdAndUpdate(workId, workData, { new: true });
};

const deleteWork = async (workId) => {
	return await Work.findByIdAndDelete(workId);
};

const getWorks = async () => {
	return await Work.find();
};

const getWorkById = async (workId) => {
	return await Work.findById(workId);
};
const getWorksByUserId = async (userId) => {
	return await Work.find({ owner: userId });
};

const updateWorkStatus = async (workId, status) => {
	return await Work.findByIdAndUpdate(workId, { status }, { new: true });
};

module.exports = {
	createWork,
	updateWork,
	deleteWork,
	getWorks,
	getWorkById,
	getWorksByUserId,
	updateWorkStatus,
};
