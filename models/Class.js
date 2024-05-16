//introducing mongoose to the model file
const mongoose = require("mongoose");

//Access the schema function in mongoose
const Schema = mongoose.Schema;

//using the function to build the schema
const contactSchema = new Schema({
  email: { type: String },
  password: { type: String, trim: true },
  address: { type: String },
  appartment: { type: Number },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  chechOut: { type: String }
});

module.exports = mongoose.model("Contact", contactSchema);