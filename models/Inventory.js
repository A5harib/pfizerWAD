const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Inventory", InventorySchema);
