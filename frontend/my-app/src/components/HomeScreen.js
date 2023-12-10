import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="home-container">
            <div className="ls">
                <p>HELLO MY STORE clothes</p>
                <li><Link to="/login" className="nav-link btn">Log in</Link></li>
                <li><Link to="/signin" className="nav-link btn">Sign UP</Link></li>

                <article className="rounded-article">
                    <p>Fashion is not about wearing the most expensive clothes; it’s about how you put together your look.</p>
                </article>
            </div>
        </div>
    );
}

export default HomeScreen;
