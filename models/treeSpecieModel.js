const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const PlantRequest = require('./plantRequestModel');

// Schema
const treeSpecieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A tree species must have a name'],
		unique: true,
		trim: true,
	},
	localName: {
		type: String,
		trim: true,
	},
	soilType: {
		type: String,
		required: [true, 'A Tree specie must have a soil type'],
	},
	rotation: {
		type: String,
	},
	price: {
		type: Number,
		required: [true, 'A tree specie must have a price'],
		min: [1, 'A price must be above 1.0'],
	},
	endUse: {
		type: String,
		required: [true, 'A Tree specie must have an end use description'],
	},
	imageCover: {
		type: String,
		// required: [true, 'A tree specie must have a cover image']
	},
	images: [String],
	createAt: {
		type: Date,
		default: Date.now(),
		// select: false
	},
	plantingMonth: [Date],
});

// virtual populate
treeSpecieSchema.virtual('plantRequest', {
	ref: 'PlantRequest',
	foreignField: 'treeSpecie',
	localField: '_id',
});

// Tree species model
const TreeSpecie = mongoose.model('TreeSpecie', treeSpecieSchema);

module.exports = TreeSpecie;
