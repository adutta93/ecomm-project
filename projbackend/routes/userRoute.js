const express = require("express");
const router = express.Router();

const {
  getUserById,
  getAllUsers,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/userController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../middleware/auth");

router.param("userId", getUserById);

router.get("/users", getAllUsers);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

module.exports = router;
