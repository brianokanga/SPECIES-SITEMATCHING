const express = require('express');
const locationController = require('../controllers/locationController');

// i)SiTE MATCH routes definitions
const router = express.Router();


// location
router
  .route('/')
  .get(locationController.getAllLocations)
  .post(locationController.createLocation);


router
  .route('/:id')
  .get(locationController.getLocation)
  .patch(locationController.updateLocation)
  .delete(locationController.deleteLocation);

module.exports = router;