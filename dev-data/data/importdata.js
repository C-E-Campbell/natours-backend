const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');

const Tour = '../../dev-data/data/tours-simple.json';

dotenv.config({ path: './config.env' });

const DB = process.env.CONNECTION_STRING;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//read json file

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//import data into db
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data is good');
  } catch (err) {
    console.log(err);
  }
};

//delete data in db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data is good');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === 'delete') {
  deleteData();
}
