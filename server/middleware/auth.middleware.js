const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');

const protectMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  try {
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_TOKEN);

      req.user = await User.findById(decoded.id).select('-password');
    }
  } catch (err) {
    res.status(401);
    throw new Error('User not authorized');
  }

  if (!token) {
    res.status(401);
    throw new Error('User not authorized, no token');
  }

  next();
});

module.exports = { protectMiddleware };
