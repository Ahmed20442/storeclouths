// Header.js
import React from 'react';
import '../Header.css';
import img from "../img/logo.png";
import About from './About';
import { Link } from 'react-router-dom';
import "../css/style.css";

const Header = () => {
    return (
        <>
            <header>
                <div id="navbar">
                    <img src={img} alt="" />

                    <nav>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><Link to="/men">Men</Link></li>
                            <li><Link to="/women">Women</Link></li>
                            <li><Link to="/kids">Kids</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <h1>Welcome To <span className="primary-text">STORE</span></h1>
                    <p>Here you can find everything you want</p>
                </div>
            </header>
            <About />
        </>
    );
}

export default Header;
