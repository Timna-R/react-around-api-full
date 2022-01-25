const errorHandling = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  return res.status(statusCode).send({
    message: statusCode === 500 ? 'An error occurred on the server' : message,
  });
};

module.exports = { errorHandling };
