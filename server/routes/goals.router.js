const express = require('express');

const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goals.controllers');

const goalsRouter = express.Router();

goalsRouter.route('/').get(getGoals).post(addGoal);

goalsRouter.put('/:id', updateGoal);

goalsRouter.delete('/:id', deleteGoal);

module.exports = goalsRouter;
