const express = require('express');
const router = express.Router();

const {
    getCategoryById, 
    createCategory, 
    getCategory, 
    getAllCategory,
    updateCategory, 
    removeCategory
    } = require('../controllers/categoryController');

const {
    isSignedIn, 
    isAdmin,
    isAuthenticated, 
    } = require('../controllers/authController');

const {getUserById} = require('../controllers/userController');

// params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// actual routes

// create
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory);

// read
router.get("/category/:categoryId", getCategory)
router.get("/category/all", getAllCategory)

// update
router.put("/category/:categoryId/:userId",  isSignedIn, isAuthenticated, isAdmin, updateCategory);

// delete
router.delete("/category/:categoryId/:userId",  isSignedIn, isAuthenticated, isAdmin, removeCategory);


module.exports = router;