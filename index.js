const express = require('express');
dotenv = require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000;
const path = require('path');
const bodyParser = require('body-parser');
const {IsSecureUrl} = require('./middlewares/secureUrl.js');


// User Model Import
const {UserRouter}  = require('./routes/UserRouter.js');
// Routers Import
const { ProductRouter } = require('./routes/ProductRouter.js');
const { CategoryRouter } = require('./routes/CategoryRouter.js');
const { BPERouter } = require('./routes/BPERoutes.js');

//Middleware
app.use(express.urlencoded({ extended: true }));      // Parse URL-encoded data (form data)
app.use(express.json());
app.use(bodyParser.json());       // Parse JSON data
app.use('/', UserRouter);
app.use('/', ProductRouter);
app.use('/', CategoryRouter);
app.use('/', BPERouter);


// Serve static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Home Page Route
// This route serves the index.html file located in the views directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});


app.get('/secure-route', IsSecureUrl, (req, res) => {
  // Only accessible if JWT is valid
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
