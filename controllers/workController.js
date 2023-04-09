const workService = require("../services/workService");

const createWork = async (req, res) => {
	try {
		req.body.owner = req.user.id;
		const work = await workService.createWork(req.body);
		res.json({ message: "Work created successfully", work });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating work" });
	}
};

const updateWork = async (req, res) => {
	try {
		const work = await workService.updateWork(req.params.id, req.body);
		if (!work) {
			return res.status(404).json({ message: "Work not found" });
		}
		res.json({ message: "Work updated successfully", work });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating work" });
	}
};

const deleteWork = async (req, res) => {
	try {
		const work = await workService.deleteWork(req.params.id);
		if (!work) {
			return res.status(404).json({ message: "Work not found" });
		}
		res.json({ message: "Work deleted successfully", work });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error deleting work" });
	}
};

const getWorks = async (req, res) => {
	try {
		const works = await workService.getWorks();
		res.json(works);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting works" });
	}
};

const getWorkById = async (req, res) => {
	try {
		const work = await workService.getWorkById(req.params.id);
		if (!work) {
			return res.status(404).json({ message: "Work not found" });
		}
		res.json(work);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting work" });
	}
};

const getWorksByUserId = async (req, res) => {
	try {
		const works = await workService.getWorksByUserId(req.user.id);
		res.json(works);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error getting works" });
	}
};

const updateWorkStatus = async (req, res) => {
	try {
		const work = await workService.updateWorkStatus(
			req.params.id,
			req.body.status,
		);
		if (!work) {
			return res.status(404).json({ message: "Work not found" });
		}
		res.json({ message: "Work status updated successfully", work });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating work status" });
	}
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
