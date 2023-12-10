// LogIn.js
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import "../css/signlogin.css";

const LogIn = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = async (event) => {
        event.preventDefault();

        const formData = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        try {
            // Use Axios to send a POST request to the /login endpoint
            const response = await axios.post('http://localhost:8000/login', formData);

            // Handle the response
            console.log(response.data);  // You can do something with the response if needed
            setErrorMessage('');
            event.target.reset();
            alert('Login successful!');

            // Navigate back to the Header page or any other page as needed
            history.push('/Header');
        } catch (error) {
            // Handle errors
            console.error('Error during login:', error.response.data.error);
            setErrorMessage(error.response.data.error || 'An error occurred during login');
        }
    };
    return (
        <div className="signin-container">
            <h2>Log In</h2>
            <form onSubmit={handleSignIn}>

                <label>Email:</label>
                <input type="email" name="email" />

                <label>Password:</label>
                <input type="password" name="password" />

                <button type="submit">Log In</button>

                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>

            {/* Add a Link to the "Sign In" page with a class */}
            <p>Don't have an account? <Link to="/signin" className="signup-link">Sign In</Link></p>
        </div>
    );
};

export default LogIn;