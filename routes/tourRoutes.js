const express = require('express');
const tourCTRL = require('../controllers/tourCTRL');

const router = express.Router();

const { getAllTours, getTour, createTour, updateTour, deleteTour } = tourCTRL;

// router.param('id', checkID);

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
