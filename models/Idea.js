const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true },
  status: {
    type: String,
    enum: ["proposed", "approved", "rejected"],
    default: "proposed",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Idea", IdeaSchema);
