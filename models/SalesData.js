const mongoose = require("mongoose");

const SalesDataSchema = new mongoose.Schema({
  month: { type: String, required: true }, // e.g., "Jan"
  sales: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SalesData", SalesDataSchema);
