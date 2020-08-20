const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');

require('dotenv').config();

const PORT = 4000;
const app = express();

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
app.get("/auth/verification", (req, res) => {
  res.render("pages/verification", { email: req.query.email });
});

app.listen(PORT, () => console.log(`Server Listening On: http://localhost:${PORT}`))