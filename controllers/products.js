import mongoose from "mongoose";
import Product from "../models/product.js"

// importing the product model from models/product
//const Product = require("../models/product");
const createProduct = async (req, res) => {
  const product = req.body;
  if(!product.name || !product.price){
    return res.status(400).json({success:false, message: "Please provide all fields"});
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success:true, data:newProduct});
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({success:false, message:"Server Error"});
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

// member 5 placeholder
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findbyIdAndDelete(id);
    // check product actually existed in DB
    if (!deleteproduct) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({
      message: "product successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }

  module.exports = {
    createProduct,
    getProducts,
    getProductbyId,
    updateProduct,
    deleteProduct,
  };
};
