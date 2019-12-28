modules.exports = {
getAllTours = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: tours
  });
},
getTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find(el => el.id === Number(id));

  if (!tour) {
    res
      .status(404)
      .json({ status: 'failed', data: 'No tour with that id was found.' });
  } else {
    res.status(200).json({ status: 'success', data: tour });
  }
},
createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
},
updateTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
},
deleteTour = (rea, res) => {
  res.status(204).json({ status: 'success', data: null });
}
}