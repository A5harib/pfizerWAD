const mongoose = require('mongoose');

const SupplyReportSchema = new mongoose.Schema({
  date: { type: String, required: true },
  summary: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupplyReport', SupplyReportSchema);