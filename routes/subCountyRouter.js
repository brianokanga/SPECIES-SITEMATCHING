const express = require('express');
const subCountyController = require('../controllers/subCountyController');

// i)SiTE MATCH routes definitions
const router = express.Router();

  //SUBCOUNTIES
router
  .route('/')
  .get(subCountyController.getAllSubCounties)
  .post(subCountyController.createSubCounty);


router
  .route('/:id')
  .get(subCountyController.getSubCounty)
  .patch(subCountyController.updateSubCounty)
  .delete(subCountyController.deleteSubCounty);

module.exports = router;