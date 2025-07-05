const SurveillanceReport = require("../models/SurveillanceReport");
const Admin = require("../models/Admin");

// --- SurveillanceReport CRUD ---
exports.getAllSurveillanceReports = async (req, res) => {
  try {
    const reports = await SurveillanceReport.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSurveillanceReport = async (req, res) => {
  try {
    const {
      age,
      gender,
      drugName,
      dose,
      sideEffect,
      severity,
      riskType,
      date,
      notes,
    } = req.body;
    const report = new SurveillanceReport({
      age,
      gender,
      drugName,
      dose,
      sideEffect,
      severity,
      riskType,
      date,
      notes,
    });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSurveillanceReport = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const report = await SurveillanceReport.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSurveillanceReport = async (req, res) => {
  try {
    const { id } = req.params;
    await SurveillanceReport.findByIdAndDelete(id);
    res.json({ message: "Surveillance report deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Admin Password CRUD (for demonstration, not secure for production) ---
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne();
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAdminPassword = async (req, res) => {
  try {
    const { password } = req.body;
    let admin = await Admin.findOne();
    if (!admin) {
      admin = new Admin({ password });
    } else {
      admin.password = password;
    }
    await admin.save();
    res.json({ message: "Admin password updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
