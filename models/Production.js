const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema({
  idea: { type: mongoose.Schema.Types.ObjectId, ref: "Idea", required: true },
  manufacturing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturing",
    required: true,
  },
  approvedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Production", ProductionSchema);
