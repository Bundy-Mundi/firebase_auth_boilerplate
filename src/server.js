const admin  = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');

require('dotenv').config();

const ENV = process.env;
const PORT = 4000;
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ENV.FIREBASE_DATABASE_URL
});

// Express Config
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res)=>{
  res.render("pages/home", { title:"Home", user: req.body.user });
});
app.get("/login", (req, res)=>{
  res.render("pages/login", { title:"Login", user: req.body.user });
});
app.get("/signup", (req, res)=>{
  res.render("pages/signup", { title:"Sign Up", id: req.params.id });
});
app.get("/profile/:id", (req, res)=>{
  res.render("pages/profile", { title:"Profile", id: req.params.id });
});
app.post("/api/auth", (req, res) => {
  res.cookie("email", req.body.user.email);
});

app.listen(PORT, () => console.log(`Server Listening On: http://localhost:${PORT}`))