import mongoose from "mongoose";
import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// member 2 task placeholder
const getProducts = async (req, res) => {
  res.send("getProducts placeholder");
};

// member3 task placeholder

const getProductbyId = async (req, res) => {
  res.send("getProductbyId placeholder");
};

// member 4 task placeholder
const updateProduct = async (req, res) => {
  res.send("updateProduct placeholder");
};
// member 5 placeholder
const deleteProduct = async (req, res) => {
  res.send("deleteProduct placeholder");
};

module.exports = {
  createProduct,
  getProducts,
  getProductbyId,
  updateProduct,
  deleteProduct,
};
