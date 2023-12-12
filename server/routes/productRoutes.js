//
//
//
// // server/routes/productRoutes.js
// const express = require('express');
// const router = express.Router();
// const Product = require('./../models/Product');
// const multer = require("multer");
//
// // Получить все товары
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
// // Получить все типы товаров
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
// // Получить один товар по ID
// router.route('/products/:id').get(async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const product = await Product.findById(productId);
//         res.json(product);
//     } catch (error) {
//         console.error('Ошибка при получении товара по ID:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
//
// // Добавить новый товар
// router.route('/products').post(async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         const savedProduct = await newProduct.save();
//         res.json(savedProduct);
//     } catch (error) {
//         console.error('Ошибка при добавлении товара:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
// // Редактировать существующий товар
// router.route('/products/:id').put(async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
//         res.json(updatedProduct);
//     } catch (error) {
//         console.error('Ошибка при обновлении товара:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
//
//
//
//
//
// // // Добавить новый товар
// // router.route('/products').post(async (req, res) => {
// //     try {
// //         const newProduct = new Product(req.body);
// //         await newProduct.save();
// //         res.json('Товар успешно добавлен');
// //     } catch (error) {
// //         console.error('Ошибка при добавлении товара:', error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });
// //
// // // Редактировать существующий товар
// // router.route('/products/:id').put(async (req, res) => {
// //     try {
// //         const productId = req.params.id;
// //         const prod = await Product.findByIdAndUpdate(productId, req.body);
// //         res.json(prod);
// //     } catch (error) {
// //         console.error('Ошибка при обновлении товара:', error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });
//
// // Удалить товар
// router.route('/products/:id').delete(async (req, res) => {
//     try {
//         const productId = req.params.id;
//         await Product.findByIdAndDelete(productId);
//         res.json('Товар успешно удален');
//     } catch (error) {
//         console.error('Ошибка при удалении товара:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
// module.exports = router;







// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');
const multer = require('multer');

// Настройка multer для обработки файлов
const storage = multer.memoryStorage(); // Сохранение изображений в памяти
const upload = multer({ storage: storage });

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
router.route('/products').post(upload.array('secondaryImages', 5), async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            image: req.body.image,
            secondaryImages: req.files.map(file => file.buffer.toString('base64')),
            specifications: req.body.specifications,
        });

        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.error('Ошибка при добавлении товара:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Редактировать существующий товар
router.route('/products/:id').put(upload.array('secondaryImages', 5), async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProductData = {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            image: req.body.image,
            secondaryImages: req.files.map(file => file.buffer.toString('base64')),
            specifications: req.body.specifications,
        };

        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
        res.json(updatedProduct);
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
