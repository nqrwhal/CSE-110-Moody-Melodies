/**
 * @description: Signup form and auth logic
 * @author: Yufei Ma
 */
import React, { useState } from "react";
import "./LoginFormStyle.css"; // Reuse the same styles
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

interface SignupFormProps {
  setIsLogin: (value: boolean) => void;
}

/**
 * Description: login form
 * param {Type}: None
 * returns {Type}: html of the login form
 */
const SignupForm: React.FC<SignupFormProps> = ({ setIsLogin }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, rememberMe);
        navigate('/'); // Redirect to home page after successful signup
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">Sign Up</h2>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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

      <button type="submit" className="submit-button">Sign Up</button>
      
      {/* Toggle Container Inside the Form */}
      <div className="toggle-container">
        <p>
          Already have an account?{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;