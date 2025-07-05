const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  target: { type: String, required: true }, // Reference to DiseaseTarget name
  testId: { type: String },
  testResult: { type: String },
  performedBy: { type: String },
  findingType: { type: String },
  findingDetails: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", LeadSchema);
