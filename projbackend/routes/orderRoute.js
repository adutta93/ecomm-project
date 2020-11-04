const express = require("express");
const router = express.Router();
const {
  isSignedIn,
  isAdmin,
  isAuthenticated,
} = require("../middleware/auth");
const {
  getUserById,
  pushOrderInPurchaseList,
} = require("../controllers/userController");
const { updateStock } = require("../controllers/productController");
const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateOrderStatus,
} = require("../controllers/orderController");

// params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

// all routes
// create
router.post(
  "/order/create/userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStock,
  createOrder
);

// read
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

// status of order
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);
router.put(
  "/order/status/orderId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateOrderStatus
);

module.exports = router;
