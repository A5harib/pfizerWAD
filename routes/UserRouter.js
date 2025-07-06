//User Router

const express = require('express');
const UserRouter  = express.Router();
const {
    signup,
    login,
    updateUser,
    getAllUsers,
    deleteUser,
}  = require('../controllers/UserController.js');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// User Authentication Routes
UserRouter.post('/api/user/signup', signup);
UserRouter.post('/api/user/login', login);

// Protected User Routes (example: only authenticated users can access)
UserRouter.get('/api/user/all', verifyToken, isAdmin, getAllUsers); // Admin only
UserRouter.put('/api/user/:name', verifyToken, updateUser); // Authenticated user can update their own profile, admin can update any
UserRouter.delete('/api/user/:name', verifyToken, isAdmin, deleteUser); // Admin only

// Logout route (client-side clears token, server-side clears httpOnly cookie)
UserRouter.post('/api/user/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
});

module.exports = {UserRouter};