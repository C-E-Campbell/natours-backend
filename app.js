const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'This is the message', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint');
});

app.listen(5005, () => {
  console.log('listening on port 5005');
});
