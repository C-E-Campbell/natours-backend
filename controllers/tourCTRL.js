const Tour = require('../models/tourModel');

module.exports = {
  getAllTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
          tours
        }
      });
    } catch (err) {
      res.status(200).json({
        status: 'fail',
        message: err
      });
    }
  },
  getTour: async (req, res) => {
    try {
      const { id } = req.params;
      const tour = await Tour.findById(id);
      res.status(200).json({
        status: 'success',
        results: tour.length,
        data: {
          tour
        }
      });
    } catch (err) {
      res.status(200).json({
        status: 'fail',
        message: err
      });
    }
    // res.status(200).json({ status: 'success', data: tour });
  },
  createTour: async (req, res) => {
    try {
      const newTour = await Tour.create(req.body);
      res.status(201).json({
        status: 'success',
        data: newTour
      });
    } catch (err) {
      res.status(400).json({ status: 'fail', message: 'Invalid data sent' });
    }
  },
  updateTour: (req, res) => {
    res.status(204).json({
      status: 'success',
      data: null
    });
  },
  deleteTour: (rea, res) => {
    res.status(204).json({ status: 'success', data: null });
  }
};
