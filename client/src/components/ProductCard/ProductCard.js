// client/src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, openModal }) => {
    return (
        <div className="card" onClick={openModal}>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description.slice(0, 70)}</p>
                <p className="product-price">{product.price} руб.</p>
            </div>
        </div>
    );
};

export default ProductCard;


