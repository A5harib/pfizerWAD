const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  capacity: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Warehouse", WarehouseSchema);
