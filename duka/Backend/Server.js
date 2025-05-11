const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");


require('dotenv').config();

// Database configuration
const dbConfig = require("./config/dbconfig.js");

// Routers
const userRouter = require('./Routes/user.js');
const adminRouter = require('./Routes/admin.js');

const app = express();  // Initialize the app

// CORS middleware setup
const corsOptions = {
  origin: "http://localhost:3000",  // Allow requests from frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));  // Use CORS with custom options

// Middleware setup
app.use(express.json());  // To parse JSON bodies
app.use(bodyParser.json());  // Optional, you can remove if not necessary

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'Routes/uploads')));


// Routes
app.use('/api/user', userRouter);  // User routes
app.use('/api/admin', adminRouter);  // Admin routes

// Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
