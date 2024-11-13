/**
 * @description: login form and auth logic
 * @author: Mark Yan and Yufei Ma
 */

import React, { useState } from "react";
import "./LoginFormStyle.css";

/**
 * Description: login form
 * param {Type}: None
 * returns {Type}: html of the login form
 */
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          rememberMe,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", data.token);

      // Redirect or update UI
      console.log(response.json())
      window.location.href = "/home";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={(event) => handleSubmit(event)} className="login-form">
        <h2 className="login-title">Sign In</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
        </div>
        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
