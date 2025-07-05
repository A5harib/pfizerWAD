const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  lastChecked: { type: String }, // e.g., "2024-05-12"
  effectiveness: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
