const router = require('express').Router();
const Product = require('../models/product');
const faker = require('faker');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({accessKeyId: 'AKIAJER55VHNGRSDMNQA', 
                       secretAccessKey: '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'});
const checkJwt = require('../middlewares/check-jwt');

var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'xtremeshoppingapp',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) { 
        cb(null, Date.now().toString())
      }
    })
  });

router.route('/products')
    .get(checkJwt, (req, res, next) => {
        Product.find({owner: req.decoded.user._id})
        .populate('owner')
        .populate('category')
        .exec((err, products) => {
            if(products) {
                res.json({
                    success: true,
                    message: 'Enjoy your products',
                    products: products
                })
            }
        })
    })
    .post([checkJwt, upload.single('product_picture')], (req, res, next) => {
        let product = new Product();
        product.owner = req.decoded.user._id;
        product.category = req.body.categoryId;
        product.description = req.body.description;
        product.title = req.body.title;
        product.price = req.body.price;
        product.image = req.file.location;
        product.save();
        res.json({
            success: true,
            message: 'Product added successfully'
        })
    });
/* Just for testing */
router.get('/faker/test',(req, res, next) => {
    for (i = 0; i < 20; i++) {
      let product = new Product();
      product.category = "5af287ddc1c82c1038a3f11f";
      product.owner = "5af0d901fab75f2b70f8be6d";
      product.image = faker.image.cats();
      product.title = faker.commerce.productName();
      product.description = faker.lorem.words();
      product.price = faker.commerce.price();
      product.save();
    }
  
    res.json({
      message: "Successfully added 20 pictures"
    });
  
  });
  
module.exports = router;