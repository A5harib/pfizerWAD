const express = require("express");
require("dotenv").config(); // Load environment variables from .env file as early as possible
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log JWT_SECRET to verify
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;
const path = require("path");
const bodyParser = require("body-parser");
const { IsSecureUrl } = require("./middlewares/secureUrl.js");
const { db_connection } = require("./config/database.js");
db_connection();


// User Model Import
// Routers Import
const { BPERouter } = require("./routes/BPERoutes.js");
const { router } = require("./routes/BPEApiRoutes.js");
const { UserRouter } = require("./routes/UserRouter.js"); // Import UserRouter

//Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data (form data)
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON data
app.use(cookieParser()); // Add cookie-parser middleware
app.use("/", BPERouter);
app.use("/", router);
app.use("/", UserRouter); // Use UserRouter

// Serve static files for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Home Page Route
// This route serves the index.html file located in the views directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/user-login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/user-login.html"));
});

app.get("/user-signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/user-signup.html"));
});

app.get("/secure-route", IsSecureUrl, (req, res) => {
  // Only accessible if JWT is valid
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
