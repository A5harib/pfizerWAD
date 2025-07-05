const DiseaseTarget = require("../models/DiseaseTarget");
const SelectedDiseaseTarget = require("../models/SelectedDiseaseTarget");
const Candidate = require("../models/Candidate");
const Lead = require("../models/Lead");

// --- DiseaseTarget CRUD ---
exports.getAllDiseaseTargets = async (req, res) => {
  try {
    const targets = await DiseaseTarget.find();
    res.json(targets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDiseaseTarget = async (req, res) => {
  try {
    const { name } = req.body;
    const target = new DiseaseTarget({ name });
    await target.save();
    res.status(201).json(target);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteDiseaseTarget = async (req, res) => {
  try {
    const { id } = req.params;
    await DiseaseTarget.findByIdAndDelete(id);
    res.json({ message: "Disease target deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- SelectedDiseaseTarget CRUD ---
exports.getAllSelectedDiseaseTargets = async (req, res) => {
  try {
    const targets = await SelectedDiseaseTarget.find();
    res.json(targets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSelectedDiseaseTarget = async (req, res) => {
  try {
    const { name } = req.body;
    const target = new SelectedDiseaseTarget({ name });
    await target.save();
    res.status(201).json(target);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSelectedDiseaseTarget = async (req, res) => {
  try {
    const { id } = req.params;
    await SelectedDiseaseTarget.findByIdAndDelete(id);
    res.json({ message: "Selected disease target deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Candidate CRUD ---
exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCandidate = async (req, res) => {
  try {
    const { name, target } = req.body;
    const candidate = new Candidate({ name, target });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.findByIdAndDelete(id);
    res.json({ message: "Candidate deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Lead CRUD ---
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLead = async (req, res) => {
  try {
    const {
      name,
      target,
      testId,
      testResult,
      performedBy,
      findingType,
      findingDetails,
    } = req.body;
    const lead = new Lead({
      name,
      target,
      testId,
      testResult,
      performedBy,
      findingType,
      findingDetails,
    });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const lead = await Lead.findByIdAndUpdate(id, update, { new: true });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    await Lead.findByIdAndDelete(id);
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
