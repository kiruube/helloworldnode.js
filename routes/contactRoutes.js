//introduce express 
const express = require("express");

//Accesing the router function in express
const router =express.Router();

//introduce the model
const Contact = require("../models/Class");

//Creating the route
router.get("/contact", (req, res) => {
    res.render("Class"); //render the file name you are working on
}); 

//Posting the post route
 router.post("/contact", async(req, res) => {
    try{
        const contact = new Contact(req.body);
        await contact.save(); 
        console.log(req.body);
        res.redirect("/contact");
    } 
    catch(error){
        console.log(error);
    }
 });


//exportation
module.exports = router;

