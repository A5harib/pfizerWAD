const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    // Fallback to cookies if not in header
    else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
}

function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'Admin') return next();
    return res.status(403).json({ message: 'Admin only' });
}

function isSeller(req, res, next) {
    if (req.user && req.user.role === 'Seller') return next();
    return res.status(403).json({ message: 'Seller only' });
}

function isCustomer(req, res, next) {
    if (req.user && req.user.role === 'Customer') return next();
    return res.status(403).json({ message: 'Customer only' });
}

module.exports = { verifyToken, isAdmin, isSeller, isCustomer };
