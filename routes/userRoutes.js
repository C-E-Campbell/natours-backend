const express = require('express');
const router = express.Router();

const getAllUsers = (req, res, next) => {
  res
    .status(500)
    .json({ status: 'Error', message: 'This route is not yet defined' });
};
const getUser = (req, res, next) => {
  res
    .status(500)
    .json({ status: 'Error', message: 'This route is not yet defined' });
};
const createUser = (req, res, next) => {
  res
    .status(500)
    .json({ status: 'Error', message: 'This route is not yet defined' });
};
const updateUser = (req, res, next) => {
  res
    .status(500)
    .json({ status: 'Error', message: 'This route is not yet defined' });
};
const deleteUser = (req, res, next) => {
  res
    .status(500)
    .json({ status: 'Error', message: 'This route is not yet defined' });
};

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
