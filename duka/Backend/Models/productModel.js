const mongoose = require("mongoose");

// Define categories enum (you can expand this list as needed)
const categoryEnum = [
  "Electronics",
  "Networking Equipments",
  "Home Appliances",
];

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: categoryEnum,  // Ensures the category must be one of the predefined options
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false, // Image is optional initially until it's uploaded
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
