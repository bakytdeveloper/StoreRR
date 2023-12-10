// client/src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = ({ filterByType }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('/api/products/types')
            .then(response => {
                setTypes(response.data);
            })
            .catch(error => {
                console.error('Ошибка получения типов товаров:', error);
            });
    }, []);

    return (
        <aside className="sidebar">
            <h3 className="sidebar-heading">Типы товаров</h3>
            <ul className="types-list">
                {types.map((type, index) => (
                    <li key={index} onClick={() => filterByType(type)}>
                        {type}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
