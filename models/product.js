// Import mongoose to create a schema and model
const mongoose = require("mongoose");

// Schema means structure/blueprint of product data
const productSchema = new mongoose.Schema(
  {
    // Product name, example: "Laptop"
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Product price, example: 999
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // Product quantity in stock, example: 10
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },

    // Optional category, example: "Electronics"
    category: {
      type: String,
      default: "General",
    },
  },
  {
    // Automatically adds createdAt and updatedAt
    timestamps: true,
  }
);

// Model connects this schema to MongoDB collection
const Product = mongoose.model("Product", productSchema);

// Export model so controller can use it
module.exports = Product;