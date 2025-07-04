const express = require('express');
const CategoryRouter = express.Router();
const { verifyToken, isAdmin } = require('../middlewares/auth');
const CategoryController = require('../controllers/CategoryController');

// Example: Add Category (Admin only)
CategoryRouter.post('/api/category/new', verifyToken, isAdmin, CategoryController.addCategory);

// Example: View Categories (public)
CategoryRouter.get('/api/category/all', CategoryController.getAllCategories);

// Add more routes for update, delete, etc.

module.exports = { CategoryRouter };
