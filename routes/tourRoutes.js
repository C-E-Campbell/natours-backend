const express = require('express');
const tourCTRL = require('../controllers/tourCTRL');

const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  // checkID,
  checkTourInfo
} = tourCTRL;

// router.param('id', checkID);

router
  .route('/')
  .get(getAllTours)
  .post(checkTourInfo, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
