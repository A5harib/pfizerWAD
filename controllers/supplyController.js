const Shipment = require("../models/Shipment");
const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");
const Warehouse = require("../models/Warehouse");
const SupplyReport = require("../models/SupplyReport");

// --- Shipment CRUD ---
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createShipment = async (req, res) => {
  try {
    const { id, origin, destination, status } = req.body;
    const shipment = new Shipment({ id, origin, destination, status });
    await shipment.save();
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const shipment = await Shipment.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteShipment = async (req, res) => {
  try {
    const { id } = req.params;
    await Shipment.findByIdAndDelete(id);
    res.json({ message: "Shipment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Inventory CRUD ---
exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createInventory = async (req, res) => {
  try {
    const { item, quantity, location } = req.body;
    const inventory = new Inventory({ item, quantity, location });
    await inventory.save();
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const inventory = await Inventory.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    await Inventory.findByIdAndDelete(id);
    res.json({ message: "Inventory deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Supplier CRUD ---
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const { supplier, product, contact } = req.body;
    const newSupplier = new Supplier({ supplier, product, contact });
    await newSupplier.save();
    res.status(201).json(newSupplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const supplier = await Supplier.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    await Supplier.findByIdAndDelete(id);
    res.json({ message: "Supplier deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Warehouse CRUD ---
exports.getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createWarehouse = async (req, res) => {
  try {
    const { name, city, capacity } = req.body;
    const warehouse = new Warehouse({ name, city, capacity });
    await warehouse.save();
    res.status(201).json(warehouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const warehouse = await Warehouse.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(warehouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    await Warehouse.findByIdAndDelete(id);
    res.json({ message: "Warehouse deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- SupplyReport CRUD ---
exports.getAllSupplyReports = async (req, res) => {
  try {
    const reports = await SupplyReport.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSupplyReport = async (req, res) => {
  try {
    const { date, summary } = req.body;
    const report = new SupplyReport({ date, summary });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSupplyReport = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const report = await SupplyReport.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSupplyReport = async(req, res);
