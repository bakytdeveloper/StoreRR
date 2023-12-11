// // server/routes/productRoutes.js
// const express = require('express');
// const router = express.Router();
// const Product = require('./../models/Product');
//
// router.route('/products').get(async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         console.error('Ошибка при получении товаров:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
// router.route('/products/types').get(async (req, res) => {
//     try {
//         const types = await Product.distinct('type');
//         res.json(types);
//     } catch (error) {
//         console.error('Ошибка при получении типов товаров:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
//
// module.exports = router;





// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');

// Получить все товары
router.route('/products').get(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Получить все типы товаров
router.route('/products/types').get(async (req, res) => {
    try {
        const types = await Product.distinct('type');
        res.json(types);
    } catch (error) {
        console.error('Ошибка при получении типов товаров:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Получить один товар по ID
router.route('/products/:id').get(async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        console.error('Ошибка при получении товара по ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Добавить новый товар
router.route('/products').post(async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json('Товар успешно добавлен');
    } catch (error) {
        console.error('Ошибка при добавлении товара:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Редактировать существующий товар
router.route('/products/:id').put(async (req, res) => {
    try {
        const productId = req.params.id;
        await Product.findByIdAndUpdate(productId, req.body);
        res.json('Товар успешно обновлен');
    } catch (error) {
        console.error('Ошибка при обновлении товара:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Удалить товар
router.route('/products/:id').delete(async (req, res) => {
    try {
        const productId = req.params.id;
        await Product.findByIdAndDelete(productId);
        res.json('Товар успешно удален');
    } catch (error) {
        console.error('Ошибка при удалении товара:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
