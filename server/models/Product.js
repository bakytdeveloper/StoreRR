// const mongoose = require('mongoose');
//
// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     type: { type: String, required: true },
//     price: { type: Number, required: true },
//     image: { type: String, required: true }, // URL к изображению товара
//     specifications: [{ key: String, value: String }], // Характеристики товара в виде таблицы
// });
//
// const Product = mongoose.model('Product', productSchema);
//
// module.exports = Product;




const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // URL к основному изображению товара
    secondaryImages: [{ type: String }], // Массив URL-ов второстепенных изображений товара
    specifications: [{ key: String, value: String }], // Характеристики товара в виде таблицы
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
