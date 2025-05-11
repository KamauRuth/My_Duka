const express = require("express");
const jwt = require("jsonwebtoken");
const productRouter = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const Product = require("../Models/productModel.js");
const Admin = require("../Models/adminModel.js");

productRouter.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



 