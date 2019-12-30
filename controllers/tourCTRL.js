const Tour = require('../models/tourModel');

module.exports = {
  getAllTours: (req, res) => {
    // res.status(200).json({
    //   status: 'success',
    //   results: tours.length,
    //   data: tours
    // });
  },
  getTour: (req, res) => {
    // const { id } = req.params;
    // // const tour = tours.find(el => el.id === Number(id));
    // res.status(200).json({ status: 'success', data: tour });
  },
  createTour: async (req, res) => {
    console.log('herer');
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
