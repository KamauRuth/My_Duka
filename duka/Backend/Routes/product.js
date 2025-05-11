const express = require("express");
const jwt = require("jsonwebtoken");
const productRouter = express.Router();
const Product = require("../Models/productModel.js");
const Admin = require("../Models/adminModel.js");



productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);        // Return them as a JSON array
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, failed to fetch products" });
  }
});


module.exports = productRouter;
