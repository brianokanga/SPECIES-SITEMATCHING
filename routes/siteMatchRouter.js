const express = require('express');
const siteMatchController = require('../controllers/siteMatchController');

// i)SiTE MATCH routes definitions
const router = express.Router();

// COUNTIES
router
  .route('/')
  .get(siteMatchController.getAllPlantRequests)
  .post(siteMatchController.createPlantRequest);


// router
//   .route('/:id')
//   .get(siteMatchController.getCounty)
//   .patch(siteMatchController.updateCounty)
//   .delete(siteMatchController.deleteCounty);


module.exports = router;