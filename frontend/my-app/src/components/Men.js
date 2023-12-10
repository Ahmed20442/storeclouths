// Men.js
import React from 'react';
import imgman1 from "../img/WhatsApp Image 2023-12-06 at 13.22.57_480f7080.jpg";
import imgman2 from "../img/WhatsApp Image 2023-12-06 at 13.22.57_f5ec7040.jpg";
import "../css/style.css";
import Product from './Product';
const Men = () => {
    return (
        <div >
            <h1>Men's Clothing Store</h1>
            <a href="/Header" className="back-link">Back to Home</a>
            <nav>
                <ul>
                    <li><a href="/Header">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                </ul>
            </nav>
            <section className="product-section">
                <h2>Men's Clothing</h2>
                <Product />
            </section>
        </div>
    );
};

export default Men;
