const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyparser = require('body-parser');
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const NotFoundError = require('./errors/not-found-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandling } = require('./middlewares/error-handling');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb');

// Limit maximum of 100 requests from IP, in 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

const doesUrlExist = () => {
  throw new NotFoundError('Requested resource not found');
};
// Enabling the request logger
app.use(requestLogger);
// server crash testing
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

// Applying the rate-limiter
app.use(limiter);
// Route handlers
app.use('/', usersRouter, cardsRouter, doesUrlExist);
// enabling the error logger
app.use(errorLogger);
// Celebrate error handler
app.use(errors());
// Centralized error handler
app.use(errorHandling);
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
