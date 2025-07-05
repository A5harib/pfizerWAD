const mongoose = require("mongoose");

const ManufacturingSchema = new mongoose.Schema({
  idea: { type: mongoose.Schema.Types.ObjectId, ref: "Idea", required: true },
  manufacturingSite: { type: String, required: true },
  batchSize: { type: String, required: true },
  productionDate: { type: String, required: true },
  expectedOutput: { type: String, required: true },
  formulationType: { type: String, required: true },
  testResults: { type: String, enum: ["Pass", "Fail", ""], default: "" },
  regulatoryApproval: {
    type: String,
    enum: ["Approved", "Pending", ""],
    default: "",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Manufacturing", ManufacturingSchema);
