const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  supplier: { type: String, required: true },
  product: { type: String, required: true },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Supplier", SupplierSchema);
