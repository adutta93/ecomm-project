const express = require('express');
const router = express.Router();

const {
    getProductById, 
    createProduct,
    getAProduct,
    photo,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getAllUniqueCaterory
    } = require('../controllers/productController');
const {
    isSignedIn, 
    isAdmin,
    isAuthenticated,
    } = require('../controllers/authController');

const {getUserById} = require('../controllers/userController');    

// params
router.param("userId", getUserById);
router.param("productId", getProductById);

// all routes

// create
router.post('/product/create/:userId', isSignedIn, isAuthenticated, isAdmin, createProduct);

// read
router.get('/product/productId', getAProduct);
router.get('/product/photo/:productId', photo);

// update
router.put("/product/:productId/:userId",  isSignedIn, isAuthenticated, isAdmin, updateProduct);

// delete
router.delete("/product/:productId/:userId",  isSignedIn, isAuthenticated, isAdmin, deleteProduct);

// listing route
router.get("/products", getAllProducts);

router.get('/products/category/all', getAllUniqueCaterory)

module.exports = router;