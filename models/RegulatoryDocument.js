const mongoose = require("mongoose");

const RegulatoryDocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("RegulatoryDocument", RegulatoryDocumentSchema);
