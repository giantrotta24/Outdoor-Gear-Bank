require('dotenv').config();
const keys = require('./keys');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3008;
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./passport');
const db = require('./database');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//sessions
app.use(session({
  secret: keys.session.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Define API routes here
app.use(routes);
<<<<<<< HEAD
require('./routes/api/item')(app);
app.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
=======
require('./routes/api/apiroutes')(app);
>>>>>>> dc2f6888c275d075ba5685eac6bfe3f2fabab510


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gearbank", 
{ 
  useNewUrlParser: true 
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
