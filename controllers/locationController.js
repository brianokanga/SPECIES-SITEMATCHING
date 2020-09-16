const TreeSpecie = require('./../models/treeSpecieModel');
const County = require('./../models/countyModel');
const SubCounty = require('./../models/subCountyModel');
const Location = require('./../models/locationModel');
const APIFeatures = require('./../utils/apiFeatures');
const factory = require('./handlerFactory');

exports.getAllLocations = factory.getAll(Location);

exports.getLocation = async (req, res) => {
	try {
		const location = await Location.findById(req.params.id).populate(
			'counties'
		);
		res.status(200).json({
			status: 'success',
			data: {
				location,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createLocation = factory.createOne(Location);

exports.updateLocation = factory.updateOne(Location);

exports.deleteLocation = factory.deleteOne(Location);
