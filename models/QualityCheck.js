const mongoose = require("mongoose");

const QualityCheckSchema = new mongoose.Schema({
  productName: { type: String, required: true }, // or use ObjectId ref to Product
  batchNumber: { type: String, required: true },
  comments: { type: String },
  testType: {
    type: String,
    enum: ["microbiology", "chemical", "stability"],
    required: true,
  },
  result: { type: String, enum: ["pass", "fail"], required: true },
  checkedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QualityCheck", QualityCheckSchema);
