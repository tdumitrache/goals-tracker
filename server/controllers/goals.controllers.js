// @route GET /goals
// @desc  Gets all the goals
// @access PRIVATE

const getGoals = (req, res) => {
  res.status(200).json({
    text: 'Take the goals',
  });
};

// @route POST /goals
// @desc  Adds a new goal
// @access PRIVATE

const addGoal = (req, res) => {
  const { goal } = req.body;

  if (!goal) {
    res.status(400);

    throw new Error("You can't add an empty goal!");
  }

  res.status(201).json({
    text: 'Added a new goal',
  });
};

// @route PUT /goals/:id
// @desc  Updates a certain goal by its id
// @access PRIVATE

const updateGoal = (req, res) => {
  res.status(200).json({
    text: 'Updated succesfully',
  });
};

// @route DELETE /goals
// @desc  Deletes a certain goal by its id
// @access PRIVATE

const deleteGoal = (req, res) => {
  res.status(200).json({
    text: 'Deleted Succesfully',
  });
};

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
