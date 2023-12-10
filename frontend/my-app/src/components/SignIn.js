// sign.js
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import "../css/signlogin.css";

const SignIn = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
      ConfirmPassword: event.target.confirmPassword.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      age: event.target.age.value,
      fullName: event.target.fullName.value,
      country: event.target.country.value
    };


    try {
      // Use Axios to send a POST request to the /login endpoint
      const response = await axios.post('http://localhost:8000/Rigister', formData);

      // Handle the response
      console.log(response.data);  // You can do something with the response if needed
      setErrorMessage('');
      event.target.reset();
      alert('SignUp successful!');

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
      <h2>Sign UP</h2>
      <form onSubmit={handleSignIn}>
        <label>Username:</label>
        <input type="text" name="username" />


        <label>Password:</label>
        <input type="password" name="password" />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>phone:</label>
        <input type="text" name="phone" />

        <label>Age:</label>
        <input type="text" name="age" />

        <label>Full Name:</label>
        <input type="text" name="fullName" />

        <label>country:</label>
        <input type="text" name="country" />

        <button type="submit">Sign UP</button>

        <h5> Already have an account? </h5>
        <Link to="/login">Login</Link>


        {errorMessage && <p className="error-message">{errorMessage}</p>}

      </form>
    </div>
  );
};

export default SignIn;
