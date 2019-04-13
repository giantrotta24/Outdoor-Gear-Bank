const passport = require('passport');
const localStrategy = require('./localStrategy');
const User = require('../database/models/User');

// Called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	done(null, { _id: user._id });
});

// User object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			done(null, user);
		}
	);
});

//  Use Strategies 
passport.use(localStrategy);

module.exports = passport;