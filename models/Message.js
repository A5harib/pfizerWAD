const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  postedBy: { type: String, default: "Anonymous" },
});

module.exports = mongoose.model("Message", MessageSchema);
