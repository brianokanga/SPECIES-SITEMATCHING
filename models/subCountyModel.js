 const mongoose = require('mongoose');
const validator = require('validator');
const PlantRequest = require('./plantRequestModel');
const County = require('./countyModel');
const Location = require('./locationModel');


const subCountySchema = new mongoose.Schema({
  name: {
    type: String
  },
  locations: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Location',
      required: true
    }
  ],
  county: {
    type: mongoose.Schema.ObjectId,
    ref: 'County',
    required: true
  },
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

// virtual populate
subCountySchema.virtual('plantRequest', {
  ref: 'PlantRequest',
  foreignField: 'subCounty',
  localField: '_id' 
});

const SubCounty = mongoose.model('SubCounty', subCountySchema);

module.exports = SubCounty;