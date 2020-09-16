const mongoose = require('mongoose');
const validator = require('validator');
const PlantRequest = require('./plantRequestModel');
const SubCounty = require('./subCountyModel');


const locationSchema = new mongoose.Schema({
  name: {
    type: String
  },
  subCounty: {
    type: mongoose.Schema.ObjectId,
    ref: 'SubCounty'
  }
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
locationSchema.virtual('plantRequest', {
  ref: 'PlantRequest',
  foreignField: 'location',
  localField: '_id' 
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;