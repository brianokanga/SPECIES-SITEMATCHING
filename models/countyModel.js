const mongoose = require('mongoose');
const validator = require('validator');
const PlantRequest = require('./plantRequestModel');

const countySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			trim: true,
		},
		subCounties: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'Sub_county',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

// virtual populate
countySchema.virtual('plantRequest', {
	ref: 'PlantRequest',
	foreignField: 'county',
	localField: '_id',
});

// countySchema.pre(/^find/, function(next) {
//   this.populate({
//       path: 'subCounties',
//       select: 'subCounties'})
//   next();
// });

const County = mongoose.model('County', countySchema);

module.exports = County;
