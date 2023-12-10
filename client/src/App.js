// // client/src/App.js
// import React, {useState} from 'react';
// import Header from './components/Header/Header';
// import Sidebar from "./components/Sidebar/Sidebar";
//
// const App = () => {
//     const [selectedType, setSelectedType] = useState(null);
//
//     const handleTypeSelect = (type) => {
//         setSelectedType(type);
//         // Здесь вы можете добавить логику для отображения только товаров выбранного типа
//     };
//
//     return (
//       <div>
//         <Header />
//           <div className="main-content">
//           <Sidebar onTypeSelect={handleTypeSelect} />
//           </div>
//
//           </div>
//   );
// };
//
// export default App;





// client/src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
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
                {/* Главная область с карточками товаров */}
                {/* ... */}
            </div>
        </div>
    );
};

export default App;
