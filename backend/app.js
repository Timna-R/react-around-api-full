const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyparser = require("body-parser");
require('dotenv').config();
const { errors } = require("celebrate"); // sprint15
var cors = require("cors"); // sprint15
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const NotFoundError = require("./errors/not-found-err");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

const doesUrlExist = () => {
  throw new NotFoundError("Requested resource not found");
};
// Enabling the request logger
app.use(requestLogger);
// Route handlers
app.use("/", usersRouter, cardsRouter, doesUrlExist);
// enabling the error logger
app.use(errorLogger);
// Celebrate error handler
app.use(errors());
// Centralized error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
});
app.listen(PORT);
