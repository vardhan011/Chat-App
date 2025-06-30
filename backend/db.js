const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;
