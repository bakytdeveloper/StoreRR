const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://bakytdeveloper:store_rr@storerr.oeqonyj.mongodb.net/StoreRR?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('БАЗА ДАННЫХ MONGODB ПОДКЛЮЧЕНА!!!');
});

// Routes
// Add your routes here...

// Start server
app.listen(PORT, () => {
    console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ !!!!!`);
});
