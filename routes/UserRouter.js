//User Router

const express = require('express');
const UserRouter  = express.Router();
const {
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
    UpdatePassword
}  = require('../controllers/UserController.js');
const { verifyToken, isAdmin } = require('../middlewares/auth');

//User Rouutes with Controllers
UserRouter.get('/api/user/new', GetUserHtmlForm);                   // HTML UI FORM
UserRouter.post('/api/user/new', PostSaveNewUser);
UserRouter.get('/api/user/all', verifyToken, isAdmin, GetAllUser);

//Delete User by email
UserRouter.delete("/api/user/delete/:email", verifyToken, isAdmin, deleteUserByEmail);
UserRouter.get("/api/user/delete/", GetDeleteUserByEmail);          // HTML UI FORM
UserRouter.post("/api/user/delete/", PostDeleteUserByEmail);        // via POST Method

//Upate User by email
UserRouter.put("/api/user/update/:email", updateUserByEmail);
UserRouter.get("/api/user/update", GetUpdateUserByEmail);          // HTML UI FORM

UserRouter.get("/api/user/ui/all", AllUserView);          // ALL USER HTML UI FORM

// For Search User by email
UserRouter.post("/api/user/search", OneUserSearch);          // ALL USER HTML UI FORM
UserRouter.get("/api/user/search", GetOneUserSearch);          // ALL USER HTML UI FORM

//User Authentication
UserRouter.get('/api/user/login', GetUserLogin);
UserRouter.post('/api/user/login', PostUserLogin);
UserRouter.put('/api/user/update-password', verifyToken, UpdatePassword);
UserRouter.post('/api/user/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
});
module.exports = {UserRouter};