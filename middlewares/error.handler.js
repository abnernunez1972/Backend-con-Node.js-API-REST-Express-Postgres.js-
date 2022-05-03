
// Manejo de Errors hacia la consola basico 
function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

// Manejo de Errors hacia el browser y StatusCode 
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Manejo de Errors Implementando Boom de NPM

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler }
