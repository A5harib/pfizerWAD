const mongoose = require("mongoose");

const RegulatoryMilestoneSchema = new mongoose.Schema({
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "RegulatoryMilestone",
  RegulatoryMilestoneSchema
);
