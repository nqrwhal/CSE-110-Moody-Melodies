/**
 * @description view of the login page
 * @author Mark Yan
 */

import React from 'react';
import "./LoginViewStyle.css";

import moodyMelodiesLogo from "../assets/moody-melodies-logo.png";
import backgroundTriton from "../assets/background-triton.png";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 * 
 * param {Type} - None
 * returns {Type} - None
 */
export const LoginView = () => {
    return (

    <div className="background">

      <img
          className="moody-melodies-logo"
          src={moodyMelodiesLogo}
        />

      <img
        className="background-triton"
        src={backgroundTriton}
      />

    </div>
  )
};