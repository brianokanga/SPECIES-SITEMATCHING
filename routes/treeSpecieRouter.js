const express = require('express');
const treeSpecieController = require('../controllers/treeSpecieController');

// i)SiTE MATCH routes definitions
const router = express.Router();


router
  .route('/')
  .get(treeSpecieController.getAllTreeSpecies)
  .post(treeSpecieController.createTreeSpecie);


router
  .route('/:id')
  .get(treeSpecieController.getTreeSpecie)
  .patch(treeSpecieController.updateTreeSpecie)
  .delete(treeSpecieController.deleteTreeSpecie);

module.exports = router;