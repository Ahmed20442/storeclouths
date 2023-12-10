// Kids.js
import React from 'react';
import imgman1 from "../img/WhatsApp Image 2023-12-06 at 13.22.56_bd80f55c.jpg";
import imgman2 from "../img/WhatsApp Image 2023-12-06 at 13.22.56_bffe3852.jpg";
import "../css/style.css";
import Product2 from './Product2';
const Kids = () => {
    return (
        <div>
            <h1>Kids's Clothing Store</h1>
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
                <h2>Kids' Clothing</h2>
                <Product2 />
            </section>
        </div>
    );
};

export default Kids;
