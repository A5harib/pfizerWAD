const mongoose = require("mongoose");

const ComplianceCheckSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: {
    type: String,
    enum: ["general", "data-integrity", "patient-safety", "protocol-deviation"],
    default: "general",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ComplianceCheck", ComplianceCheckSchema);
