const jwt = require('jsonwebtoken')
const User = require('../models/user')

const extractTokenMiddleware = async (request, response, next) => {
    if (request.token) {
        try {
          const decoded = await jwt.verify(request.token, process.env.SECRET);
          request.user = await User.findById(decoded.id);
        } catch(err) {
          return response.status(401).json({ msg: 'token missing or invalid' });
        }
    }

    next()
}

module.exports = extractTokenMiddleware