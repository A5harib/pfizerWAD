const mongoose = require("mongoose");

const StrategySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  effectiveness: {
    type: String,
    enum: ["High", "Medium", "Low"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Strategy", StrategySchema);
