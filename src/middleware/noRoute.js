const createError = require("http-errors");

const noRoute = (request, response, next) => {
  next(createError(404));
};

module.exports = noRoute;
