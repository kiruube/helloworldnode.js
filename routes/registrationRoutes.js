const express = require("express");
const router = express.Router();

//Import model
const Registration = require("../models/Registration");
router.get('/register', function(req, res){
    res.render("registration");
});

// post route for the sign up form
router. post('/register', function(req, res){
    const baby = new Registration(req, body)
    console.log(baby);
    baby.save();    
});

module.exports = router;