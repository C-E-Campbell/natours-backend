const express = require('express');
const router = express.Router();
const userCTRL = require('../controllers/usersCTRL');
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = userCTRL;

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
