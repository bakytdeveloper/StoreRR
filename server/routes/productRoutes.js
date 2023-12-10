// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');

router.route('/products').get(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.route('/products/types').get(async (req, res) => {
    try {
        const types = await Product.distinct('type');
        res.json(types);
    } catch (error) {
        console.error('Ошибка при получении типов товаров:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
