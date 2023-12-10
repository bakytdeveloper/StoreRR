//
// // client/src/App.js
// import React, { useState, useEffect } from 'react';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import ProductCard from "./components/ProductCard/ProductCard";
// import './App.css'
// import axios from 'axios';
//
// const App = () => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//
//     useEffect(() => {
//         axios.get('/api/products')
//             .then(response => {
//                 setProducts(response.data);
//                 setFilteredProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Ошибка получения товаров:', error);
//             });
//     }, []);
//
//
//     const filterByType = (type) => {
//         if (type === 'All') {
//             setFilteredProducts(products);
//         } else {
//             const filtered = products.filter(product => product.type === type);
//             setFilteredProducts(filtered);
//         }
//     };
//
//     return (
//         <div>
//             <Header />
//             <div className="container">
//                 <Sidebar className="sidebar" filterByType={filterByType} />
//                 <div className="products">
//                     {products.map(product => (
//                         <ProductCard key={product._id} product={product} />
//                     ))}
//                 </div>
//                 {/* Главная область с карточками товаров */}
//                 {/* ... */}
//             </div>
//         </div>
//     );
// };
//
// export default App;






// client/src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductCard from "./components/ProductCard/ProductCard";
import './App.css'
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => {
                console.error('Ошибка получения товаров:', error);
            });
    }, []);

    const filterByType = (type) => {
        if (type === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.type === type);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar filterByType={filterByType} />
                <div className="products">
                    {filteredProducts.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
