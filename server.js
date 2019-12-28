const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
