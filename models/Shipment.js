const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  status: {
    type: String,
    enum: ["In Transit", "Delivered", "Pending", "Delayed"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Shipment", ShipmentSchema);
