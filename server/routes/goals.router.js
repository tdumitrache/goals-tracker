const express = require('express');

const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goals.controller');
const { protectMiddleware } = require('../middleware/auth.middleware');

const goalsRouter = express.Router();

goalsRouter
  .route('/')
  .get(protectMiddleware, getGoals)
  .post(protectMiddleware, addGoal);

goalsRouter.put('/:id', protectMiddleware, updateGoal);

goalsRouter.delete('/:id', protectMiddleware, deleteGoal);

module.exports = goalsRouter;
