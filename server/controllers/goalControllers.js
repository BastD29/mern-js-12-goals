const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get goals" });
  const goals = await Goal.find();

  res.status(200).json(goals);
});
// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add text" });
    throw new Error("Please add a text field");
  }

  //   res.status(200).json({ message: "Set goal" });

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});
// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: `Update goal ${req.params.id}` });

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: `Delete goal ${req.params.id}` });

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //   await goal.remove();
  await goal.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};