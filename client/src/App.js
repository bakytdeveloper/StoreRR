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
//                 <Sidebar filterByType={filterByType} />
//                 <div className="products">
//                     {filteredProducts.map(product => (
//                         <ProductCard key={product._id} product={product} />
//                     ))}
//                 </div>
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
import './App.css';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);

        if (searchValue === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                product =>
                    product.name.toLowerCase().includes(searchValue) ||
                    product.description.toLowerCase().includes(searchValue)
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Header handleSearch={handleSearch} searchTerm={searchTerm} />
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

