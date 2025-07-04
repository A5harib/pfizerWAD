const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controllers/ProductController');
const { verifyToken, isAdmin, isSeller, isCustomer } = require('../middlewares/auth');
const multer = require('multer');
const path = require('path');

// Multer setup for product images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/products/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Example: Add Product (Admin/Seller only)
ProductRouter.post('/api/product/new', verifyToken, (req, res, next) => {
    if (req.user.role === 'Admin' || req.user.role === 'Seller') return next();
    return res.status(403).json({ message: 'Admin/Seller only' });
}, upload.single('image'), ProductController.addProduct);

// Example: View Products (public)
ProductRouter.get('/api/product/all', ProductController.getAllProducts);

// Serve Product Views
ProductRouter.get('/product/add', (req, res) => res.sendFile(require('path').join(__dirname, '../views/product-add.html')));
ProductRouter.get('/product/list', (req, res) => res.sendFile(require('path').join(__dirname, '../views/product-list.html')));
ProductRouter.get('/product/update', (req, res) => res.sendFile(require('path').join(__dirname, '../views/product-update.html')));
ProductRouter.get('/product/delete', (req, res) => res.sendFile(require('path').join(__dirname, '../views/product-delete.html')));
ProductRouter.get('/product/search', (req, res) => res.sendFile(require('path').join(__dirname, '../views/product-search.html')));

// Add more routes for update, delete, search, etc.

module.exports = { ProductRouter };
