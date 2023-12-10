const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');

// Example route
router.route('/products').get((req, res) => {
    Product.find((err, products) => {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

// Add more routes as needed...

module.exports = router;
