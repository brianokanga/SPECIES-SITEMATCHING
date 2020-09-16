const PlantRequest = require('./../models/plantRequestModel');
const TreeSpecie = require('../models/treeSpecieModel');
const County = require('../models/countyModel');
const SubCounty = require('../models/subCountyModel');
const Location = require('../models/locationModel');
const APIFeatures = require('../utils/apiFeatures');
const factory = require('./handlerFactory');

exports.getAllPlantRequests = factory.getAll(PlantRequest);
exports.createPlantRequest = factory.createOne(PlantRequest);
