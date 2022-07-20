const asyncHandler = require('express-async-handler');

const Goal = require('../models/goal.models');

// @route GET /goals
// @desc  Gets all the goals
// @access PRIVATE

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});

  res.status(200).json(goals);
});

// @route POST /goals
// @desc  Adds a new goal
// @access PRIVATE

const addGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400);

    throw new Error("You can't add an empty goal!");
  }

  const newGoal = await Goal.create({
    text,
  });

  res.status(201).json(newGoal);
});

// @route PUT /goals/:id
// @desc  Updates a certain goal by its id
// @access PRIVATE

const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(404);

    throw new Error('Goal not found!');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @route DELETE /goals
// @desc  Deletes a certain goal by its id
// @access PRIVATE

const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(404);

    throw new Error('Goal not found!');
  }

  const deletedGoal = await Goal.findByIdAndRemove(id);

  res.status(200).json({
    id: deletedGoal._id,
  });
});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
