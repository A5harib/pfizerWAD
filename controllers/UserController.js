// User Controller

const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import the User model

// User Signup
async function signup(req, res) {
  try {
    const { name, password, role } = req.body;

    const userExists = await User.findOne({ name });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      password,
      role: role || "Student", // Default role to Student if not provided
    });

    if (user) {
            if (!process.env.JWT_SECRET) {
                throw new Error('JWT_SECRET is not defined in environment variables.');
            }
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
      res.status(201).json({
        _id: user._id,
        name: user.name,
        role: user.role,
        token: token,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// User Login
async function login(req, res) {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    if (!(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables.');
      }
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      res.json({
        _id: user._id,
        name: user.name,
        role: user.role,
        token: token,
      });
    } catch (jwtError) {
      console.error("Error generating JWT:", jwtError);
      res
        .status(500)
        .json({
          message: "Server error during token generation",
          error: jwtError.message,
        });
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

// Update User (for password change or role change by admin)
async function updateUser(req, res) {
  try {
    const { name } = req.params; // Assuming name is used for identification
    const { password, role } = req.body;

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (password) {
      user.password = password; // Pre-save hook will hash this
    }
    if (role && req.user.role === "Admin") {
      // Only admin can change roles
      user.role = role;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      role: updatedUser.role,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Get all users (Admin only)
async function getAllUsers(req, res) {
  try {
    const users = await User.find({}).select("-password"); // Exclude passwords
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Delete user (Admin only)
async function deleteUser(req, res) {
  try {
    const { name } = req.params;
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User removed" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  signup,
  login,
  updateUser,
  getAllUsers,
  deleteUser,
};
