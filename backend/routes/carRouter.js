const express = require('express');
const carController = require('../controllers/carController');
const {testId} = require('../middleware/middleware');
const app = express();

const router = express.Router();

router.param('id', testId);

router.route('/').get(carController.getAllCars)

router.route('/:id').get(carController.getCar)

module.exports = router;