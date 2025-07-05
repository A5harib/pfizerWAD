const Product = require("../models/Product");
const QualityCheck = require("../models/QualityCheck");

// --- Product CRUD ---
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, lastChecked, effectiveness } = req.body;
    const product = new Product({
      name,
      description,
      lastChecked,
      effectiveness,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const product = await Product.findByIdAndUpdate(id, update, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- QualityCheck CRUD ---
exports.getAllQualityChecks = async (req, res) => {
  try {
    const checks = await QualityCheck.find();
    res.json(checks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQualityCheck = async (req, res) => {
  try {
    const { productName, batchNumber, comments, testType, result } = req.body;
    const check = new QualityCheck({
      productName,
      batchNumber,
      comments,
      testType,
      result,
    });
    await check.save();
    res.status(201).json(check);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateQualityCheck = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const check = await QualityCheck.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(check);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteQualityCheck = async (req, res) => {
  try {
    const { id } = req.params;
    await QualityCheck.findByIdAndDelete(id);
    res.json({ message: "Quality check deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
