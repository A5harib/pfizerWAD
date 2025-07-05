const SiteReport = require("../models/SiteReport");
const ComplianceCheck = require("../models/ComplianceCheck");
const RegulatoryDocument = require("../models/RegulatoryDocument");
const RegulatoryMilestone = require("../models/RegulatoryMilestone");
const RegulatoryAuditLog = require("../models/RegulatoryAuditLog");

// --- SiteReport CRUD ---
exports.getAllSiteReports = async (req, res) => {
  try {
    const reports = await SiteReport.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSiteReport = async (req, res) => {
  try {
    const { siteName, investigator, notes } = req.body;
    const report = new SiteReport({ siteName, investigator, notes });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSiteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const report = await SiteReport.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSiteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await SiteReport.findByIdAndDelete(id);
    res.json({ message: "Site report deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- ComplianceCheck CRUD ---
exports.getAllComplianceChecks = async (req, res) => {
  try {
    const checks = await ComplianceCheck.find();
    res.json(checks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createComplianceCheck = async (req, res) => {
  try {
    const { text, category } = req.body;
    const check = new ComplianceCheck({ text, category });
    await check.save();
    res.status(201).json(check);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateComplianceCheck = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const check = await ComplianceCheck.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(check);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteComplianceCheck = async (req, res) => {
  try {
    const { id } = req.params;
    await ComplianceCheck.findByIdAndDelete(id);
    res.json({ message: "Compliance check deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- RegulatoryDocument CRUD ---
exports.getAllRegulatoryDocuments = async (req, res) => {
  try {
    const docs = await RegulatoryDocument.find();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRegulatoryDocument = async (req, res) => {
  try {
    const { name, link } = req.body;
    const doc = new RegulatoryDocument({ name, link });
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteRegulatoryDocument = async (req, res) => {
  try {
    const { id } = req.params;
    await RegulatoryDocument.findByIdAndDelete(id);
    res.json({ message: "Regulatory document deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- RegulatoryMilestone CRUD ---
exports.getAllRegulatoryMilestones = async (req, res) => {
  try {
    const milestones = await RegulatoryMilestone.find();
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRegulatoryMilestone = async (req, res) => {
  try {
    const { description, dueDate, completed } = req.body;
    const milestone = new RegulatoryMilestone({
      description,
      dueDate,
      completed,
    });
    await milestone.save();
    res.status(201).json(milestone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateRegulatoryMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const milestone = await RegulatoryMilestone.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(milestone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteRegulatoryMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    await RegulatoryMilestone.findByIdAndDelete(id);
    res.json({ message: "Regulatory milestone deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- RegulatoryAuditLog CRUD ---
exports.getAllRegulatoryAuditLogs = async (req, res) => {
  try {
    const logs = await RegulatoryAuditLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRegulatoryAuditLog = async (req, res) => {
  try {
    const { type, status, notes, timestamp } = req.body;
    const log = new RegulatoryAuditLog({ type, status, notes, timestamp });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteRegulatoryAuditLog = async (req, res) => {
  try {
    const { id } = req.params;
    await RegulatoryAuditLog.findByIdAndDelete(id);
    res.json({ message: "Regulatory audit log deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
