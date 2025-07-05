const mongoose = require("mongoose");

const SelectedDiseaseTargetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  selectedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "SelectedDiseaseTarget",
  SelectedDiseaseTargetSchema
);
