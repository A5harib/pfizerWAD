const Strategy = require("../models/Strategy");
const SalesData = require("../models/SalesData");

// --- Strategy CRUD ---
exports.getAllStrategies = async (req, res) => {
  try {
    const strategies = await Strategy.find();
    res.json(strategies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStrategy = async (req, res) => {
  try {
    const { title, description, effectiveness } = req.body;
    const strategy = new Strategy({ title, description, effectiveness });
    await strategy.save();
    res.status(201).json(strategy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStrategy = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const strategy = await Strategy.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(strategy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteStrategy = async (req, res) => {
  try {
    const { id } = req.params;
    await Strategy.findByIdAndDelete(id);
    res.json({ message: "Strategy deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- SalesData CRUD ---
exports.getAllSalesData = async (req, res) => {
  try {
    const sales = await SalesData.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSalesData = async (req, res) => {
  try {
    const { month, sales } = req.body;
    const salesData = new SalesData({ month, sales });
    await salesData.save();
    res.status(201).json(salesData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSalesData = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const salesData = await SalesData.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(salesData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSalesData = async (req, res) => {
  try {
    const { id } = req.params;
    await SalesData.findByIdAndDelete(id);
    res.json({ message: "Sales data deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
