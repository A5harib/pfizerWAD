const { Product } = require('../models/ProductModel');
const { Category } = require('../models/CategoryModel');
const { UsersModel } = require('../models/UserModels');

// Add, view, update, delete, search/filter products
// Role-based access: Admin/Seller full CRUD, Customer view only

// Add Product (Admin/Seller only)
async function addProduct(req, res) {
    try {
        const { name, description, price, stock, availability, category } = req.body;
        let imageUrl = req.body.imageUrl;
        if (req.file) {
            imageUrl = '/uploads/products/' + req.file.filename;
        }
        const createdBy = req.user.id;
        const product = new Product({ name, description, price, stock, imageUrl, availability, category, createdBy });
        await product.save();
        res.status(201).json({ message: 'Product added', product });
    } catch (err) {
        res.status(500).json({ message: 'Error adding product', err });
    }
}

// View Products (public)
async function getAllProducts(req, res) {
    try {
        const products = await Product.find().populate('category');
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', err });
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    // Add update, delete, search/filter methods here
};
