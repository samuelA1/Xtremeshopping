const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.isSeller = req.body.isSeller;
    user.picture = user.gravatar();

    User.findOne({email: req.body.email}, (err, existingUser) => {
        if (existingUser) {
            res.json({
                success: false,
                message: 'A user with that email already exists'
            });
        } else {
            user.save();
            let token = jwt.sign({user: user}, config.secret, {expiresIn: '7d'});
            res.json({
                success: true,
                message: 'Enjoy your token',
                token: token
            });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found'
            });
        } else if (user) {
            let validatePassword = user.comparePassword(req.body.password);
            if (!validatePassword) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password'
                });
            } else {
                let token = jwt.sign({user: user}, config.secret, {expiresIn: '7d'});
                res.json({
                    success: true,
                    message: 'Enjoy your token',
                    token: token
            });
            }
        }
    });
});

module.exports = router;
