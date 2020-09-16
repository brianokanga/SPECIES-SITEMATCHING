const APIFeatures = require('../utils/apiFeatures');
const SubCounty = require('../models/subCountyModel');
const factory = require('./handlerFactory');

exports.getAllSubCounties = async (req, res) => {
	try {
		const features = new APIFeatures(SubCounty.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.paginate();
		const subCounties = await features.query;

		res.status(200).json({
			status: 'success',
			results: subCounties.length,
			data: {
				subCounties,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.getSubCounty = async (req, res) => {
	try {
		const subCounty = await SubCounty.findById(req.params.id).populate(
			'plantRequest'
		);
		res.status(200).json({
			status: 'success',
			data: {
				subCounty,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createSubCounty = async (req, res) => {
	try {
		const newsubCounty = await SubCounty.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				subCounty: newsubCounty,
			},
		});
	} catch (err) {
		console.error(err);
		if (err.code === 11000) {
			return res.status(400).json({error: 'This tree species already exists'});
		}
		res.status(500).json({error: 'Server error'});
	}
};

exports.updateSubCounty = async (req, res) => {
	try {
		const subCounty = await SubCounty.findOneAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(200).json({
			status: 'success',
			data: {
				subCounty,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.deleteSubCounty = async (req, res) => {
	try {
		await SubCounty.findByIdAndDelete(req.params.id);
		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};
