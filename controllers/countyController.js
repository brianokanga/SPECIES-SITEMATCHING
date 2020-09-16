const TreeSpecie = require('../models/treeSpecieModel');
const County = require('../models/countyModel');
const SubCounty = require('../models/subCountyModel');
const Location = require('../models/locationModel');
const APIFeatures = require('../utils/apiFeatures');
const factory = require('./handlerFactory');

// COUNTIES
exports.getAllCounties = factory.getAll(County);

exports.getCounty = async (req, res) => {
	try {
		const county = await County.findById(req.params.id).populate(
			'plantRequest'
		);
		res.status(200).json({
			status: 'success',
			data: {
				county,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createCounty = factory.createOne(County);

exports.updateCounty = factory.updateOne(County);

exports.deleteCounty = factory.deleteOne(County);
