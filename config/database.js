const mongoose = require('mongoose');
async function db_connection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('MongoDB Connected Successfully!');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
}
module.exports = { db_connection };