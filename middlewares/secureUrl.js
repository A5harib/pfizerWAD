dotenv = require('dotenv').config(); // Load environment variables from .env file
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

// JWT verification middleware
function IsSecureUrl(req, res, next) {
    const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
}

module.exports = {IsSecureUrl};
