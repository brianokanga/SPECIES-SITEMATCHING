const TreeSpecie = require('../models/treeSpecieModel');
const APIFeatures = require('./../utils/apiFeatures');
const factory = require('./handlerFactory');
const catchsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');

exports.getAllTreeSpecies = factory.getAll(TreeSpecie);

exports.getTreeSpecie = async (req, res) => {
	try {
		const treeSpecie = await TreeSpecie.findById(req.params.id).populate(
			'counties'
		);
		res.status(200).json({
			status: 'success',
			data: {
				treeSpecie,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createTreeSpecie = factory.createOne(TreeSpecie);

exports.updateTreeSpecie = factory.updateOne(TreeSpecie);

exports.deleteTreeSpecie = factory.deleteOne(TreeSpecie);

exports.getSpeciesByCounty = async (req, res) => {
	try {
		let filter = {};
		// allow nested routes
		if (!req.params.countyId) filter = {county: req.params.countyId};

		const treeSpices = await TreeSpecie.find(filter);

		res.status(200).json({
			status: 'success',
			result: treeSpices.length,
			data: {
				treeSpices,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.getAllCountySpecies = async (req, res) => {
	try {
		let filter = {};
		// allow nested routes
		if (!req.params.countyId) filter = {county: req.params.countyId};

		const treeSpices = await TreeSpecie.find(filter);

		res.status(200).json({
			status: 'success',
			result: treeSpices.length,
			data: {
				treeSpices,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};
