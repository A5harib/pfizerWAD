const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
    return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
}

module.exports = { generateToken };
