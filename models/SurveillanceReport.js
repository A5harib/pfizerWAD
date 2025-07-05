const mongoose = require("mongoose");

const SurveillanceReportSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  drugName: { type: String, required: true },
  dose: { type: String, required: true },
  sideEffect: { type: String, required: true },
  severity: {
    type: String,
    enum: ["mild", "moderate", "severe"],
    required: true,
  },
  riskType: {
    type: String,
    enum: ["allergic", "toxic", "interaction", "unknown"],
    required: true,
  },
  date: { type: String, required: true }, // ISO date string
  notes: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SurveillanceReport", SurveillanceReportSchema);
