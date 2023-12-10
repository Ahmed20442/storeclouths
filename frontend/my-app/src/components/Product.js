import React, { useState } from "react";
import useProductData from "../useProductData";
import "../css/product.css"
import { Link } from 'react-router-dom';

function Product() {
    const products = useProductData();
    const [quantities, setQuantities] = useState({});

    const handleIncrease = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleDecrease = (productId) => {
        setQuantities(prevQuantities => {
            const newQuantity = (prevQuantities[productId] || 0) - 1;
            return {
                ...prevQuantities,
                [productId]: newQuantity >= 0 ? newQuantity : 0
            };
        });
    };

    return (
        <div>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product._id} className="product-item">
                        <img src={product.img} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <div className="quantity-controls">
                            <button className="quantity-btn" onClick={() => handleDecrease(product._id)}>-</button>
                            <span className="quantity">{quantities[product._id] || 0}</span>
                            <button className="quantity-btn" onClick={() => handleIncrease(product._id)}>+</button>
                        </div>
                        <li><Link to="/Profile" className="nav-link btn">Buy</Link></li>                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;