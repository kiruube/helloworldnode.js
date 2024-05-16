//Dependencies
const express = require("express"); // for express
const mongoose = require("mongoose");
const path = require("path"); // for pug
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

require("dotenv").config();

//Import register model with user details
const AdminRegistration = require("./models/adminRegistration");


const port = 3000;

//importing routes
const registrationRoutes = require("./routes/registrationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRegistration = require("./routes/adminRegRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
//Instantiations
const app = express();

// Configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

app.set("view engine", "pug"); // setting view engine to pug
app.set("views", path.join(__dirname, "views")); // specifying the directory the views are found

// Middleware
app.use(express.static(path.join(__dirname, "public"))); // set directory for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To return data in the response path
//Express session configs
app.use(expressSession);
app.use(passport.initialize()); //intialising passport to keep track
app.use(passport.session()); //the session that passport offers for the user to login into the system
//passport configs
passport.use(AdminRegistration.createStrategy()); //importing models in this file that we require for logging in
passport.serializeUser(AdminRegistration.serializeUser); //assigning a unique serial number once you are logged into the system
passport.deserializeUser(AdminRegistration.deserializeUser); //the serial number is destoryed after logging out

// Routes
//use imported routes
app.use("/baby", registrationRoutes);

app.use("/", contactRoutes);

app.use("/", adminRegistration);

app.use("/", authenticationRoutes);

// app.get("/register", (req, res) => {
//     res.render("registration");
// });

// app.get("/babylist", (req, res) => {
//     res.render("babylist");
// });
// app.get("/login", (req, res) => {
//     res.render("login");
// });
// app.get('/', (req, res) => {
//     res.send('Homepage! Hello world.');
//   });

// app.get('/about',(req, res) => {
//     res.send('About page. Nice');
// });

// // syntax of a route
// // app.METHOD(PATH.HANDLER);

// app.get('/course',(req, res) => {
//     res.send("You have hit the course page");
// })

// app.get('/books/:bookId',(req, res) => {
//     res.send(req.params.bookId);
//     console.log(req.params);
//     console.log(req.params.bookId);
// });

// app.get('/students/:name',(req, res) => {
//     res.send("This my students name " + req.params.name);
// });

// app.get('/students/:studentId',(req, res) => {
//     res.send("This my students id " + req.params.studentId);
//     console.log("studentsID " + req.params);
// });

// //Query params
// app.get('/students',(req, res) =>{
//     res.send("This is class " + req.query.class + "Cohort " + req.query.cohort);
// })

// app.get('/babies',(req, res) =>{
//     res.send("This is baby  " + req.query.name + "age " + req.query.age);
// })

// //serving html files
// app.get('/index',(req, res) =>{
//     res.sendFile(__dirname + "/index.html");

// });

//Get route for the sign up form
// app.get('/signup', function(req, res){
//     res.sendFile(__dirname + "/signup.html");
// });

// // post route for the sign up form
// app. post('/signup', function(req, res){
//     console.log(req.body);
//     let signup = req.body
//     // res.redirect("/index");
//     res.json({message:"Signed up successfully",signup});
// });

// For invalid routes
app.get("*", function (req, res) {
  res.send("404! This is an invalid URI");
});

// BootstrappingServer
app.listen(3000, () => console.log(`listening on port ${[port]}`)); // new
