const mongoose = require('mongoose');
async function db_connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('MongoDB Connected Successfully!');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
}
module.exports = { db_connection };