/**
 * @description: login form only
 * @author: Mark Yan
 */

import React, { useState } from 'react';
import './LoginFormStyle.css'; 

/**
 * Description: login form
 * param {Type}: None
 * returns {Type}: html of the login form
 */
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add authentication logic here
        console.log("User login");
    };

  return (
    <div className="login-container">
        <form onSubmit={(event) => handleSubmit(event)} className="login-form">
            <h2 className="login-title">Sign In</h2>
            <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="form-input"
            />
            </div>
            <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="form-input"
            />
            </div>
            <button type="submit" className="submit-button">
            Sign In
            </button>
        </form>
    </div>
  );
};

export default LoginForm;