const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["Student", "Admin"], default: "Student" },
  password: { type: String }, // Only for admin, can be hashed
});

module.exports = mongoose.model("User", UserSchema);
