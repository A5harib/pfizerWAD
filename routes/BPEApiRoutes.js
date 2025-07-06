const express = require("express");
const router = express.Router();

// Controllers
const discoveryController = require("../controllers/discoveryController");
const educationController = require("../controllers/educationController");
const introductionController = require("../controllers/introductionController");
const oversightController = require("../controllers/oversightController");
const qualityController = require("../controllers/qualityController");
const salesController = require("../controllers/salesController");
const supplyController = require("../controllers/supplyController");
const surveillanceController = require("../controllers/surveillanceController");

// --- Discovery Routes ---
router.get(
  "/api/discovery/disease-targets",
  discoveryController.getAllDiseaseTargets
);
router.post(
  "/api/discovery/disease-targets",
  discoveryController.createDiseaseTarget
);
router.delete(
  "/api/discovery/disease-targets/:id",
  discoveryController.deleteDiseaseTarget
);

router.get(
  "/api/discovery/selected-disease-targets",
  discoveryController.getAllSelectedDiseaseTargets
);
router.post(
  "/api/discovery/selected-disease-targets",
  discoveryController.createSelectedDiseaseTarget
);
router.delete(
  "/api/discovery/selected-disease-targets/:id",
  discoveryController.deleteSelectedDiseaseTarget
);

router.get("/api/discovery/candidates", discoveryController.getAllCandidates);
router.post("/api/discovery/candidates", discoveryController.createCandidate);
router.delete(
  "/api/discovery/candidates/:id",
  discoveryController.deleteCandidate
);

router.get("/api/discovery/leads", discoveryController.getAllLeads);
router.post("/api/discovery/leads", discoveryController.createLead);
router.put("/api/discovery/leads/:id", discoveryController.updateLead);
router.delete("/api/discovery/leads/:id", discoveryController.deleteLead);

// --- Education Routes ---
router.get("/api/education/courses", educationController.getAllCourses);
router.post("/api/education/courses", educationController.createCourse);
router.put("/api/education/courses/:id", educationController.updateCourse);
router.delete("/api/education/courses/:id", educationController.deleteCourse);

router.get("/api/education/events", educationController.getAllEvents);
router.post("/api/education/events", educationController.createEvent);
router.put("/api/education/events/:id", educationController.updateEvent);
router.delete("/api/education/events/:id", educationController.deleteEvent);

router.get("/api/education/messages", educationController.getAllMessages);
router.post("/api/education/messages", educationController.createMessage);
router.delete("/api/education/messages/:id", educationController.deleteMessage);



// --- Introduction Routes ---
router.get("/api/introduction/ideas", introductionController.getAllIdeas);
router.post("/api/introduction/ideas", introductionController.createIdea);
router.put("/api/introduction/ideas/:id", introductionController.updateIdea);
router.delete("/api/introduction/ideas/:id", introductionController.deleteIdea);

router.get(
  "/api/introduction/manufacturing",
  introductionController.getAllManufacturing
);
router.post(
  "/api/introduction/manufacturing",
  introductionController.createManufacturing
);
router.put(
  "/api/introduction/manufacturing/:id",
  introductionController.updateManufacturing
);
router.delete(
  "/api/introduction/manufacturing/:id",
  introductionController.deleteManufacturing
);

router.get(
  "/api/introduction/productions",
  introductionController.getAllProductions
);
router.post(
  "/api/introduction/productions",
  introductionController.createProduction
);
router.delete(
  "/api/introduction/productions/:id",
  introductionController.deleteProduction
);

// --- Oversight Routes ---
router.get(
  "/api/oversight/site-reports",
  oversightController.getAllSiteReports
);
router.post(
  "/api/oversight/site-reports",
  oversightController.createSiteReport
);
router.put(
  "/api/oversight/site-reports/:id",
  oversightController.updateSiteReport
);
router.delete(
  "/api/oversight/site-reports/:id",
  oversightController.deleteSiteReport
);

router.get(
  "/api/oversight/compliance-checks",
  oversightController.getAllComplianceChecks
);
router.post(
  "/api/oversight/compliance-checks",
  oversightController.createComplianceCheck
);
router.put(
  "/api/oversight/compliance-checks/:id",
  oversightController.updateComplianceCheck
);
router.delete(
  "/api/oversight/compliance-checks/:id",
  oversightController.deleteComplianceCheck
);

router.get(
  "/api/oversight/regulatory-documents",
  oversightController.getAllRegulatoryDocuments
);
router.post(
  "/api/oversight/regulatory-documents",
  oversightController.createRegulatoryDocument
);
router.delete(
  "/api/oversight/regulatory-documents/:id",
  oversightController.deleteRegulatoryDocument
);

router.get(
  "/api/oversight/regulatory-milestones",
  oversightController.getAllRegulatoryMilestones
);
router.post(
  "/api/oversight/regulatory-milestones",
  oversightController.createRegulatoryMilestone
);
router.put(
  "/api/oversight/regulatory-milestones/:id",
  oversightController.updateRegulatoryMilestone
);
router.delete(
  "/api/oversight/regulatory-milestones/:id",
  oversightController.deleteRegulatoryMilestone
);

router.get(
  "/api/oversight/regulatory-audit-logs",
  oversightController.getAllRegulatoryAuditLogs
);
router.post(
  "/api/oversight/regulatory-audit-logs",
  oversightController.createRegulatoryAuditLog
);
router.delete(
  "/api/oversight/regulatory-audit-logs/:id",
  oversightController.deleteRegulatoryAuditLog
);

// --- Quality Routes ---
router.get("/api/quality/products", qualityController.getAllProducts);
router.post("/api/quality/products", qualityController.createProduct);
router.put("/api/quality/products/:id", qualityController.updateProduct);
router.delete("/api/quality/products/:id", qualityController.deleteProduct);

router.get("/api/quality/checks", qualityController.getAllQualityChecks);
router.post("/api/quality/checks", qualityController.createQualityCheck);
router.put("/api/quality/checks/:id", qualityController.updateQualityCheck);
router.delete("/api/quality/checks/:id", qualityController.deleteQualityCheck);

// --- Sales Routes ---
router.get("/api/sales/strategies", salesController.getAllStrategies);
router.post("/api/sales/strategies", salesController.createStrategy);
router.put("/api/sales/strategies/:id", salesController.updateStrategy);
router.delete("/api/sales/strategies/:id", salesController.deleteStrategy);

router.get("/api/sales/data", salesController.getAllSalesData);
router.post("/api/sales/data", salesController.createSalesData);
router.put("/api/sales/data/:id", salesController.updateSalesData);
router.delete("/api/sales/data/:id", salesController.deleteSalesData);

// --- Supply Routes ---
router.get("/api/supply/shipments", supplyController.getAllShipments);
router.post("/api/supply/shipments", supplyController.createShipment);
router.put("/api/supply/shipments/:id", supplyController.updateShipment);
router.delete("/api/supply/shipments/:id", supplyController.deleteShipment);

router.get("/api/supply/inventory", supplyController.getAllInventory);
router.post("/api/supply/inventory", supplyController.createInventory);
router.put("/api/supply/inventory/:id", supplyController.updateInventory);
router.delete("/api/supply/inventory/:id", supplyController.deleteInventory);

router.get("/api/supply/suppliers", supplyController.getAllSuppliers);
router.post("/api/supply/suppliers", supplyController.createSupplier);
router.put("/api/supply/suppliers/:id", supplyController.updateSupplier);
router.delete("/api/supply/suppliers/:id", supplyController.deleteSupplier);

router.get("/api/supply/warehouses", supplyController.getAllWarehouses);
router.post("/api/supply/warehouses", supplyController.createWarehouse);
router.put("/api/supply/warehouses/:id", supplyController.updateWarehouse);
router.delete("/api/supply/warehouses/:id", supplyController.deleteWarehouse);

router.get("/api/supply/reports", supplyController.getAllSupplyReports);
router.post("/api/supply/reports", supplyController.createSupplyReport);
router.put("/api/supply/reports/:id", supplyController.updateSupplyReport);
router.delete("/api/supply/reports/:id", supplyController.deleteSupplyReport);

// --- Surveillance Routes ---
router.get(
  "/api/surveillance/reports",
  surveillanceController.getAllSurveillanceReports
);
router.post(
  "/api/surveillance/reports",
  surveillanceController.createSurveillanceReport
);
router.put(
  "/api/surveillance/reports/:id",
  surveillanceController.updateSurveillanceReport
);
router.delete(
  "/api/surveillance/reports/:id",
  surveillanceController.deleteSurveillanceReport
);

router.get("/api/surveillance/admin", surveillanceController.getAdmin);
router.put(
  "/api/surveillance/admin",
  surveillanceController.updateAdminPassword
);

module.exports = { router };
