/**
 * @description view of the login page
 * @author Mark Yan and
 */

import React from "react";
import "./LoginViewStyle.css";
import moodyMelodiesLogo from "../assets/moody-melodies-logo.png";
import backgroundTriton from "../assets/background-triton.png";
import AuthForm from "../components/LoginPage/AuthForm";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type}: None
 * returns {Type}: None
 */
export const LoginView = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Add a loading spinner here
  }

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="background">
      <img
        className="moody-melodies-logo"
        src={moodyMelodiesLogo}
        alt="Moody Melodies Logo"
      />
      <AuthForm />
      <img
        className="background-triton"
        src={backgroundTriton}
        alt="Background"
      />
    </div>
  );
};