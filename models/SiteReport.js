const mongoose = require("mongoose");

const SiteReportSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  investigator: { type: String, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SiteReport", SiteReportSchema);
