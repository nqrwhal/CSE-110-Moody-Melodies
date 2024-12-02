/**
 * @description: 
 * @author: 
 */

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./LoginFormStyle.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <SignupForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default AuthForm;