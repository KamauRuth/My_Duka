const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const adminRouter = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const Product = require("../Models/productModel.js");
const Admin = require("../Models/adminModel.js");


const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);  // Create uploads directory if it doesn't exist
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);  // Use the uploads folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;  // Generate unique filename using timestamp
    cb(null, filename);
  },
});

const upload = multer({ storage });


// // Serve uploaded images statically
// app.use("/uploads", express.static("uploads"));

// Route to add product
adminRouter.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { name, sku, brand, category, price, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const productId = uuidv4();  // Generate a unique product ID

    const newProduct = new Product({
      productId, 
      name,
      sku,
      brand,
      category,
      price,
      description,
      image: imageUrl, // Save image path in the DB
    });

    await newProduct.save();
    console.log(productId);

    res.status(201).json({ success: true, message: "Product added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
});






module.exports = adminRouter;
