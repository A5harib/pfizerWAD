// User Controller

const path = require('path');
const multer = require('multer');
const bcrypt   =   require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

// <--------  Multer Setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/users/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // e.g., 12345678.png
    }
});
const upload = multer({ storage: storage });
// End Multer Setup ------- >>

const { UsersModel } = require('../models/UserModels.js');

// User Signup FORM UI
async function GetUserHtmlForm(req, res) {
    res.sendFile(path.join(__dirname, '../views/user-signup.html'));
}

// // Add New User to System
async function PostSaveNewUser(req, res) {
    try {
        // Check if picture is uploaded
        let picturePath = null;
        if (req.file) {
            picturePath = req.file.path; // multer puts uploaded file info in req.file
            console.log('Picture Path:', picturePath); // Debugging
        }
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userData = { ...req.body, password: hashedPassword, picture: picturePath };
        const NewUser = new UsersModel(userData); // Data from HTML FORM with hashed password and picture
        const NewUserCreated = await NewUser.save(); // INSERT This data into DB
        if (!NewUserCreated) {
            return res.status(400).json({ mgs: "User Not Created" });
        } else {
            console.log('New User Created:', NewUserCreated); // For Debugging
            res.status(201).json({ mgs: "New User Created", NewUserCreated });
        }
    }
    catch (err) {
        console.log('Error while creating New User:', err)
        res.status(500).json({ mgs: "Internal Server Error / Form Validation Failed", err });
    }
}

// View all Users from DB
async function GetAllUser(req, res) {
    try {

        const AllUsers = await UsersModel.find();         //INSERT This data into DB
        res.send(AllUsers);
    }
    catch (err) {
        console.log('Internal Server Error :', err)
    }
}

// Search one User by Email from DB
async function OneUserSearch(req, res) {
    try {
        // Get Email from HTML (email);
        const find_email = req.body.email; // via POST
        console.log('Email:', find_email); // For Debugging
        const OneUser = await UsersModel.findOne({ email: find_email });         //Search One User from DB
        if (!OneUser) {
            return res.status(404).json({ mgs: "User Does not Exist" });
        }
        res.send(OneUser);
    }
    catch (err) {
        console.log('Internal Server Error :', err)
    }
}

async function deleteUserByEmail(req, res) {
    try {
        const form_email = req.params.email;        // via params
        const deletedUser = await UsersModel.findOneAndDelete({ email: form_email });
        if (!deletedUser) {
            return res.status(404).json({ mgs: "User Not Found" });
        }
        else {
            console.log('User Deleted:', deletedUser); // For Debugging
            res.status(200).json({ mgs: "User Deleted", deletedUser });
        }
    }
    catch (err) {
        console.log('Error while deleting User:', err)
        res.status(500).json({ mgs: "Internal Server Error", err });
    }
}

async function PostDeleteUserByEmail(req, res) {
    try {
        const form_email = req.body.email;      // via POST
        const deletedUser = await UsersModel.findOneAndDelete({ email: form_email });
        if (!deletedUser) {
            return res.status(404).json({ mgs: "User Not Found" });
        }
        else {
            console.log('User Deleted:', deletedUser); // For Debugging
            res.status(200).json({ mgs: "User Deleted", deletedUser });
        }
    }
    catch (err) {
        console.log('Error while deleting User:', err)
        res.status(500).json({ mgs: "Internal Server Error", err });
    }
}

async function updateUserByEmail(req, res) {
    try {
        const user_form_email = req.params.email;       // User HTML FORM
        const updatedUser = await UsersModel.findOneAndUpdate({ email: user_form_email }, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ mgs: "User Not Found" });
        }
        else {
            console.log('User Updated:', updatedUser); // For Debugging
            res.status(200).json({ mgs: "User Updated", updatedUser });
        }
    }
    catch (err) {
        console.log('Error while updating User:', err)
        res.status(500).json({ mgs: "Internal Server Error", err });
    }
}

// TASK for Students: Update user (name or password)
// exports.updateUserByEmail = async (req, res) => {
//     const { form_email } = req.params;
//     const { form_name, password } = req.body;

//     try {
//       const updatedUser = await User.findOneAndUpdate(
//         { email },
//         { $set: { ...(name && { form_name }), ...(password && { form_password }) } },
//         { new: true }
//       );

//       if (!updatedUser) return res.status(404).json({ message: "User not found" });
//       res.json({ message: "User updated", updatedUser });
//     } catch (err) {
//       res.status(500).json({ message: "Error updating user" });
//     }
//   };

async function GetDeleteUserByEmail(req, res) {
    res.sendFile(path.join(__dirname, '../views/user-delete.html'));
}

async function GetUpdateUserByEmail(req, res) {
    res.sendFile(path.join(__dirname, '../views/user-update.html'));
}
async function AllUserView(req, res) {
    // res.sendFile(path.join(__dirname, '../views/user-view-all.html'));
    res.sendFile(path.join(__dirname, '../views/user-view-with-options.html'));
}

async function GetOneUserSearch(req, res) {
    res.sendFile(path.join(__dirname, '../views/user-search.html'));
}

async function GetUserLogin(req, res) {
    res.sendFile(path.join(__dirname, '../views/user-login.html'));
}

async function PostUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const UserFound = await UsersModel.findOne({ email: email });
        if (!UserFound) {
            return res.status(401).json({ message: 'User not found' });
        }
        // Compare password using bcrypt
        const isMatch = await bcrypt.compare(password, UserFound.password);
        if (isMatch) {
            const token = jwt.sign({ id: UserFound._id, role: UserFound.role }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true });
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.log('Error while login User:', err);
        res.status(500).json({ mgs: 'Internal Server Error', err });
    }
}

// Update Password (secure)
async function UpdatePassword(req, res) {
    try {
        const { email, oldPassword, newPassword } = req.body;
        const user = await UsersModel.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Old password incorrect' });
        const hashed = await bcrypt.hash(newPassword, 10);
        user.password = hashed;
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating password', err });
    }
}

module.exports = {
    GetOneUserSearch,
    OneUserSearch,
    AllUserView,
    PostDeleteUserByEmail,
    GetUserHtmlForm,
    PostSaveNewUser,
    GetAllUser,
    deleteUserByEmail,
    updateUserByEmail,
    GetDeleteUserByEmail,
    GetUpdateUserByEmail,
    GetUserLogin,
    PostUserLogin,
    UpdatePassword,
};