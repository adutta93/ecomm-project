const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {signup, login, signout, isSignedIn} = require('../controllers/authController');

router.post('/signup', [
    check("firstName")
    .isLength({ min: 3 }).withMessage('Firstname must be at least 3 chars long'),

    check("lastName")
    .isLength({ min: 2 }).withMessage('Lasttname must be at least 2 chars long'),

    check("email")
    .isEmail().withMessage('Must be a valid email id'),

    check("mobileNumber")
    .isLength({min: 10}).withMessage("Enter a valid mobile number"),

    check("password")
    .isLength({min:8}).withMessage('Must be a atleast 8 character long')
    .matches(/\d/).withMessage('must contain a number')
], signup);

router.post('/login', [    
    check("email")
    .isEmail().withMessage('Must be a valid email id'),

    check("password")
    .isLength({min:8}).withMessage('Must be a atleast 8 character long')
    .matches(/\d/).withMessage('must contain a number')
], login);

router.get('/signout', signout);

// router.get('/test', isSignedIn, (req, res) => {
//     res.json(req.auth)
// });

module.exports = router;
