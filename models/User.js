const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Student", "Admin"], default: "Student" },
  password: { type: String, required: true },
});

// Hash password before saving the user model
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log('Password hashed successfully for user:', this.name);
    next();
  } catch (error) {
    console.error('Error hashing password for user:', this.name, error);
    next(error); // Pass the error to the next middleware
  }
});

// Method to compare password for login
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
