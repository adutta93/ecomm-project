const User = require('../models/userModel');
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

// SIGNUP 
exports.signup = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: "Not being able to save user"
            });
        }
        res.json({
            name: user.firstName,
            surname: user.lastName,
            email: user.email,
            number : user.mobileNumber,
            id: user._id,
            type: user.userType,
        });
    });
};

// LOGIN/SIGNIN
exports.login = (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    };

    // to find email and password in DB
    User.findOne({email}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "Email dose not exists"
            })
        }

        if(!user.authenticate(password)){
            return res.status(402).json({
                err: "Email or password do not match"
            })
        };

        // create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        // put token in cookie
        res.cookie("token", token, {expire: new Date() + 9999});

        // send response to front end
        const {_id, firstName, lastName, email, mobileNumber, role} = user;
        return res.json({
            token,
            user:{
                _id, firstName, lastName, email, mobileNumber, role
            }
        })
    });
};

// SIGNOUT
exports.signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        status: "Success",
        message: "You signed out successfully"
    });
};

// PROTECTED ROUTES
// isSignedIn
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth"
});

// custom middlewares
// isAuthenticated 
exports.isAuthenticated = (req, res, next) => {
    let authChecker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!authChecker){
        return res.status(403).json({
            error: "ACCESS DENIED"
        });
    }
    next();
};
// isAdmin
exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error: "You're not admin, access denied"
        });
    }
    next();
};





