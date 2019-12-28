const fs = require('fs');
const express = require('express');
const router = express.Router();
const tourCTRL = require('../controllers/tourCTRL');
const {} = tourCTRL;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
