const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const County = require('./countyModel');
const SubCounty = require('./subCountyModel');
const Location = require('./locationModel');
const TreeSpecie = require('./treeSpecieModel');


// Schema
const plantRequestSchema = new mongoose.Schema(
  {
    treeSpecie: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'TreeSpecie',
        required: [true, 'Please select the tree specie'], 
      }
    ],
    quantity: {
      type: Number,
      default: 0,
      required: [true, 'Please enter number of tree  to plant'], 
    },
    county: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'County',
        required: [true, 'Please select the County'],
      }
    ],
    subCounty: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Sub_county',
        required: [true, 'Please select the Sub County'],
      }
    ],
    location: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Location',
        required: [true, 'Please select the location'],
      }
    ],
    plantingLocation: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
      }
    ],
    paid: {
      type: Boolean,
      default: false
    },
    createAt: {
      type: Date,
      default: Date.now()
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

plantRequestSchema.pre(/^find/, function(next) {
  this.populate({
      path: 'counties',
      select: 'name'})
      .populate({
      path: 'subCounties',
      select: 'name'})
      .populate({
      path: 'subCounties',
      select: 'name'})
      .populate({
      path: 'treeSpecie',
      select: 'name'});
  next();
});


const PlantRequest = mongoose.model('PlantRequest', plantRequestSchema);

module.exports = PlantRequest;
