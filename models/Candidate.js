const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  target: { type: String, required: true }, // Reference to DiseaseTarget name
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
