const express = require('express');
const router = express.Router();
const tourCTRL = require('../controllers/tourCTRL');

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkID
} = tourCTRL;

router.param('id', checkID);

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
