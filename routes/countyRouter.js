const express = require('express');
const countyController = require('../controllers/countyController');

const router = express.Router();

// COUNTIES
router
	.route('/')
	.get(countyController.getAllCounties)
	.post(countyController.createCounty);

router
	.route('/:id')
	.get(countyController.getCounty)
	.patch(countyController.updateCounty)
	.delete(countyController.deleteCounty);

module.exports = router;
