const loggerOriginalUrl = (req, res, next) => {
  console.log(`Запрос по адресу ${req.originalUrl}`);
  next();
};

module.exports = loggerOriginalUrl;
