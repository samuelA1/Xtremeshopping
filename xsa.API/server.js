const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config')
const userRoutes = require('./routes/account');
const mainRoutes = require('./routes/main');
const sellerRoutes = require('./routes/seller');
const searchRoutes = require('./routes/product-search')

const app = express();

mongoose.connect(config.database, {useMongoClient: true}, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db');
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));

app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/search', searchRoutes);



app.listen(config.port, err => {
    console.log('Magic happens on port ' + config.port);
})