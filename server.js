require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3008;
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Sessions
app.use(session({
  secret: 'puppy-heaven',
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Define API routes here
app.use(routes);
require('./routes/api/apiroutes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gearbank', 
{ 
  useNewUrlParser: true 
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
