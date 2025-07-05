const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, // Store as string for flexible formats (e.g., "March 15, 2024")
});

module.exports = mongoose.model("Event", EventSchema);
