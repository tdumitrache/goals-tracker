const express = require('express');

const {
  registerUser,
  loginUser,
  getMyProfile,
} = require('../controllers/users.controller');
const { protectMiddleware } = require('../middleware/auth.middleware');

const userRouter = express.Router();

userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', protectMiddleware, getMyProfile);

module.exports = userRouter;
