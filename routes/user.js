const express = require('express');
const router = express.Router();
const User = require('../database/models/User');

router.post('/user', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body;
    
    //validation
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        } else {
            const newUser = new User({
                username: username,
                password: password
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);
            });
        }
    });
});

module.exports = router;