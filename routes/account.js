const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const checkJwt = require('../middlewares/check-jwt');
const Order = require('../models/order')

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

router.route('/profile')
.get(checkJwt, (req, res, next) => {
    User.findOne({_id: req.decoded.user._id}, (err, user) => {
        res.json({
            success: true,
            message: 'Successful',
            user: user
        });
    });
})
.post(checkJwt, (req, res, next) => {
    User.findOne({_id: req.decoded.user._id}, (err, user) => {
        if (err) return next(err);

        if(req.body.name) user.name = req.body.name;
        if(req.body.email) user.email = req.body.email;
        if(req.body.password) user.password = req.body.password;

        user.isSeller = req.body.isSeller;
        user.save();
        res.json({
            success: true,
            message:'Successfully edited your profile'
        });
    });
});

router.route('/address')
.get(checkJwt, (req, res, next) => {
    User.findOne({_id: req.decoded.user._id}, (err, user) => {
        res.json({
            success: true,
            message: 'Successful',
            address: user.address
        });
    });
})
.post(checkJwt, (req, res, next) => {
    User.findOne({_id: req.decoded.user._id}, (err, user) => {
        if (err) return next(err);

        if (req.body.addr1) user.address.addr1 = req.body.addr1;
        if (req.body.addr2) user.address.addr2 = req.body.addr2;
        if (req.body.city) user.address.city = req.body.city;
        if (req.body.state) user.address.state = req.body.state;
        if (req.body.country) user.address.country = req.body.country;
        if (req.body.postalCode) user.address.postalCode = req.body.postalCode;
     
        user.save();
        res.json({
            success: true,
            message: 'Successfully edited your address'
        })
    })
});

router.get('/orders', checkJwt, (req, res, next) => {
    Order.find({owner: req.decoded.user._id})
        .populate('owner')
        .populate('products.product')
        .exec((err, orders) => {
            if(err) {
                res.json({
                    success: false,
                    message: 'Could not find orders'
                })
            } else {
                res.json({
                    success: true,
                    message:'Orders found',
                    orders: orders
                });
            }
        })
});

router.get('/orders/:id', checkJwt, (req, res, next) => {
    Order.findOne({ _id: req.params.id })
      .populate('owner')
      .exec((err, order) => {
        if (err) {
          res.json({
            success: false,
            message: "Couldn't find your order"
          });
        } else {
          res.json({
            success: true,
            message: 'Found your order',
            order: order
          });
        }
      });
  });
module.exports = router;
