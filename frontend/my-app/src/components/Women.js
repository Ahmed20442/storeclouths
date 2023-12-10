// Women.js
import React from 'react';
import imgman1 from "../img/WhatsApp Image 2023-12-06 at 13.22.58_466e41d4.jpg";
import imgman2 from "../img/WhatsApp Image 2023-12-06 at 13.22.58_be99d2b2.jpg";
import "../css/style.css";
import Product1 from './Product1';
const Women = () => {
    return (
        <div>
            <h1>Women's Clothing Store</h1>
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
                <h2>Women's Clothing</h2>
                <Product1 />
            </section>
        </div>
    );
};

export default Women;
