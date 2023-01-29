const extractTokenMiddleware = (request, response, next) => {
    const authorization = request.headers['authorization'];
  
    if (authorization) {
      const token = authorization.split(' ')[1];
    
      request.token = token;
    }
  
    next()
}

module.exports = extractTokenMiddleware