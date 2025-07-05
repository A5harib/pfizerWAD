const mongoose = require('mongoose');

const RegulatoryAuditLogSchema = new mongoose.Schema({
  type: { type: String, required: true },
  status: { type: String },
  notes: { type: String },
  timestamp: { type: String, required: true }
});

module.exports = mongoose.model('RegulatoryAuditLog', RegulatoryAuditLogSchema);