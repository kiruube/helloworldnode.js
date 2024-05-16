const express = require("express");
const router = express.Router();

//Import model
const Registration = require("../models/Registration");
router.get("/register", (req, res) => {
  res.render("registration");
});

// post route for the sign up form
//installing the async function
router.post("/register", async (req, res) => {
  try {
    const baby = new Registration(req.body);
    console.log(baby);
    await baby.save();
    res.redirect("/babieslist");
  } catch (error) {
    res.status(400).send("Sorry! Something wrong happened");
    console.log("Error registering a baby.", error);
  }
});

//fetching babies from the database
router.get("/babieslist", async (req, res) => {
  try {
    const babies = await Registration.find();
    res.render("babiesmanagement", { sitters: sitters });
  } catch (error) {
    res.status(400).send("Unable to find babies from the Database");
  }
});

//Deleting a baby in the database

//updating a baby in the database
router.get("/babiesUpdate/:id", async (req, res) => {
  try {
    const babyUpdate = await Registration.findOne({ _id: req.params.id });
    res.render("babiesUpdate", { baby: babyUpdate });
  } catch (error) {
    console.log("error finding baby!", error);
    res.status(400).send("Unable to find baby from the Database");
  }
});

router.post("/babiesUpdate", async (req, res) => {
  try {
    await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babieslist");
  } catch (error) {}
  res.status(404).send("Unable to update baby in the Database");
});
module.exports = router;
