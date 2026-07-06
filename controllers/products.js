// importing the product model from models/product
const Product = require('../models/product');
const createProduct = async (req, res) => {
    res.send('createProduct placeholder');
};

// member 2 task placeholder
  const getProducts = async (req, res) => {
    res.send('getProducts placeholder');
  };

 // member3 task placeholder
 
  const getProductbyId = async (req, res) => {
    res.send('getProductbyId placeholder');
  };

  // member 4 task placeholder
    const updateProduct = async (req, res) => {
    res.send('updateProduct placeholder');

    };
  // member 5 placeholder
    const deleteProduct = async (req, res) => {
    res.send('deleteProduct placeholder'); 
    }; 

    module.exports = {
        createProduct,
        getProducts,
        getProductbyId,
        updateProduct,
        deleteProduct
    };