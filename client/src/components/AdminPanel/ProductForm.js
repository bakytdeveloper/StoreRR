// client/src/components/AdminPanel/ProductForm/ProductForm.js
import React, { useState, useEffect } from 'react';
import './ProductForm.css';

const ProductForm = ({ editingProduct, onCancelEdit }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: '',
        price: '',
        image: '',
        secondaryImages: [],
        specifications: [],
    });

    useEffect(() => {
        // Если есть редактируемый продукт, устанавливаем данные в форму для редактирования
        if (editingProduct) {
            setFormData(editingProduct);
        }
    }, [editingProduct]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь добавьте логику для отправки данных на сервер, например, через API
        console.log('Данные товара для отправки:', formData);
    };

    return (
        <div className="product-form">
            <h3>{editingProduct ? 'Редактирование товара' : 'Добавление нового товара'}</h3>
            <form onSubmit={handleSubmit}>
                {/* Здесь добавьте поля для ввода данных о товаре */}
                <button type="submit">{editingProduct ? 'Сохранить изменения' : 'Добавить товар'}</button>
                {editingProduct && <button type="button" onClick={onCancelEdit}>Отмена</button>}
            </form>
        </div>
    );
};

export default ProductForm;
