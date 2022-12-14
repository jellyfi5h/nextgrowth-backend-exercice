
// const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');

// error handling for excaptions
const errorHandler = (err, req, res, next) => {
  if (['UserExistsError', 'ValidationError'].includes(err.name)) {
    return res.status(405).json(err);
  }
  if (['CastError'].includes(err.name)) {
    return res.status(400).json(err);
  }
  if (err.code == 11000) {
      err.status = 400;
      err.message = 'Some fields are unique and can not have duplicate content';
  }
  return res
    .status(err.status || 500)
    .json({
      code: err.status || 500,
      message: err.message || STATUS_CODES[err.status],
    });
};

module.exports = { errorHandler };