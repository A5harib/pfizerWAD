const express = require("express");
const BPERouter = express.Router();
const path = require("path");

//serve static files for uploaded images
BPERouter.use("/uploads", express.static(path.join(__dirname, "../uploads")));

BPERouter.get("/discovery", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/discovery.html"));
});
BPERouter.get("/education", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/education.html"));
});
//introduction
BPERouter.get("/introduction", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/introduction.html"));
});
//oversight
BPERouter.get("/oversight", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/oversight.html"));
});

//quality
BPERouter.get("/quality", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/quality.html"));
});
//sales
BPERouter.get("/sales", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/sales.html"));
});

//supply
BPERouter.get("/supply", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/supply.html"));
});
//surveillance
BPERouter.get("/surveillance", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/surveillance.html"));
});

module.exports = { BPERouter };
