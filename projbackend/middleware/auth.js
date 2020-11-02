var expressJwt = require("express-jwt");

// PROTECTED ROUTES MIDDLEWARES

// isSignedIn
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

// custom middlewares
// isAuthenticated
exports.isAuthenticated = (req, res, next) => {
  let authChecker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authChecker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};
// isAdmin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You're not admin, access denied",
    });
  }
  next();
};
