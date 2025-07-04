const { Category } = require('../models/CategoryModel');
const { Product } = require('../models/ProductModel');

// Add, view, update, delete categories
// Only Admin can add/update/delete
// Public can view

// Add Category (Admin only)
async function addCategory(req, res) {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json({ message: 'Category added', category });
    } catch (err) {
        res.status(500).json({ message: 'Error adding category', err });
    }
}

// View Categories (public)
async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching categories', err });
    }
}

module.exports = {
    addCategory,
    getAllCategories,
    // Add update, delete methods here
};
