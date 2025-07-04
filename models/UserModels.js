const mongoose = require("mongoose");
// DB Connection
const {db_connection} = require('../config/database.js');
db_connection();

// User Schema

    const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        // required: [true, "Name is required"],
        // trim: true,
        // minlength: [3, "Name must be at least 3 characters"],
        // maxlength: [50, "Name must be less than 50 characters"]
      },
      email: {
        type: String,
        // required: [true, "Email is required"],
        // unique: true,   // AS PK
        // lowercase: true,
        // trim: true,
        // match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
      },
      password: {
        type: String,
        // required: [true, "Password is required"],
        // trim: true,
        // min: [6, "Password must be at least 6 characters"],
      },
      role: {
        type: String,
        enum: ["Admin", "Customer", "Seller"],
        default: "Customer"
      },
      picture:{
        type: String,
        default: "https://res.cloudinary.com/dqj0xgk8h/image/upload/v1698231234/DefaultProfilePicture.png",
      },
      createdAt: {
        type: Date,
        default: Date.now
      }    
})

// User Model
const UsersModel = mongoose.model('users', UserSchema);
module.exports = { UsersModel };