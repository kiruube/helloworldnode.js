//introduce express 
const express = require("express");

//Accesing the router function in express
const router =express.Router();

//introduce the model
const AdminRegistration = require("../models/adminRegistration");

//Creating the route
router.get("/adminRegister", (req, res) => {
    res.render("adminReg"); //render the file name you are working on
}); 

//Posting the post route.. Sending data to the Database.
router.post("/adminRegister", async(req, res) => {
    try{
        const adminRegister = new AdminRegistration(req.body);
        console.log(req.body);
        await AdminRegistration.register(adminRegister, req.body.password, (err) => {  //register methods is used for authentication 
            //password harshing(for security purposes)
            if(err){
                throw err
            }
            res.redirect("/adminRegister")
        });   
    } 
    catch(error){
        res.status(400).send("Sorry! Something wrong happened");
        console.log("Error registering Administrator", error);
    }
 });

 module.exports = router;