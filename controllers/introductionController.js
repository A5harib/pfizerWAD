const Idea = require("../models/Idea");
const Manufacturing = require("../models/Manufacturing");
const Production = require("../models/Production");

// --- Idea CRUD ---
exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createIdea = async (req, res) => {
  try {
    const { title, description, source, status } = req.body;
    const idea = new Idea({ title, description, source, status });
    await idea.save();
    res.status(201).json(idea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const idea = await Idea.findByIdAndUpdate(id, update, { new: true });
    res.json(idea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    await Idea.findByIdAndDelete(id);
    res.json({ message: "Idea deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Manufacturing CRUD ---
exports.getAllManufacturing = async (req, res) => {
  try {
    const manufacturing = await Manufacturing.find().populate("idea");
    res.json(manufacturing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createManufacturing = async (req, res) => {
  try {
    const {
      idea,
      manufacturingSite,
      batchSize,
      productionDate,
      expectedOutput,
      formulationType,
      testResults,
      regulatoryApproval,
    } = req.body;
    const manufacturing = new Manufacturing({
      idea,
      manufacturingSite,
      batchSize,
      productionDate,
      expectedOutput,
      formulationType,
      testResults,
      regulatoryApproval,
    });
    await manufacturing.save();
    res.status(201).json(manufacturing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateManufacturing = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const manufacturing = await Manufacturing.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(manufacturing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManufacturing = async (req, res) => {
  try {
    const { id } = req.params;
    await Manufacturing.findByIdAndDelete(id);
    res.json({ message: "Manufacturing entry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Production CRUD ---
exports.getAllProductions = async (req, res) => {
  try {
    const productions = await Production.find().populate("idea manufacturing");
    res.json(productions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduction = async (req, res) => {
  try {
    const { idea, manufacturing } = req.body;
    const production = new Production({ idea, manufacturing });
    await production.save();
    res.status(201).json(production);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createIdea = async (req, res) => {
  try {
    const { title, description, source, status } = req.body;
    const idea = new Idea({ title, description, source, status });
    await idea.save();
    res.status(201).json(idea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const idea = await Idea.findByIdAndUpdate(id, update, { new: true });
    res.json(idea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    await Idea.findByIdAndDelete(id);
    res.json({ message: "Idea deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Manufacturing CRUD ---
exports.getAllManufacturing = async (req, res) => {
  try {
    const manufacturing = await Manufacturing.find().populate("idea");
    res.json(manufacturing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createManufacturing = async (req, res) => {
  try {
    const {
      idea,
      manufacturingSite,
      batchSize,
      productionDate,
      expectedOutput,
      formulationType,
      testResults,
      regulatoryApproval,
    } = req.body;
    const manufacturing = new Manufacturing({
      idea,
      manufacturingSite,
      batchSize,
      productionDate,
      expectedOutput,
      formulationType,
      testResults,
      regulatoryApproval,
    });
    await manufacturing.save();
    res.status(201).json(manufacturing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateManufacturing = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const manufacturing = await Manufacturing.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(manufacturing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManufacturing = async (req, res) => {
  try {
    const { id } = req.params;
    await Manufacturing.findByIdAndDelete(id);
    res.json({ message: "Manufacturing entry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Production CRUD ---
exports.getAllProductions = async (req, res) => {
  try {
    const productions = await Production.find().populate("idea manufacturing");
    res.json(productions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduction = async (req, res) => {
  try {
    const { idea, manufacturing } = req.body;
    const production = new Production({ idea, manufacturing });
    await production.save();
    res.status(201).json(production);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProduction = async (req, res) => {
  try {
    const { id } = req.params;
    await Production.findByIdAndDelete(id);
    res.json({ message: "Production deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
