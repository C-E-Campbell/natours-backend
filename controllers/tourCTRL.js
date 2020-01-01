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
  },
  createTour: async (req, res) => {
    try {
      const newTour = await Tour.create(req.body);
      res.status(201).json({
        status: 'success',
        data: newTour
      });
    } catch (err) {
      res.status(400).json({ status: 'fail', message: err });
    }
  },
  updateTour: async (req, res) => {
    try {
      const { id } = req.params;
      const tour = await Tour.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true
      });
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
  },
  deleteTour: async (req, res) => {
    try {
      const { id } = req.params;
      const tour = await Tour.findByIdAndDelete(id);
      res.status(204).json({
        status: 'success',
        results: tour.length,
        data: null
      });
    } catch (err) {
      res.status(200).json({
        status: 'fail',
        message: err
      });
    }
  }
};
