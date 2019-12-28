
const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
app.use(morgan('dev'));
app.use(express.json());



app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(5005, () => {
  console.log('listening on port 5005');
});
