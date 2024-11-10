/**
 * @description view of the login page
 * @author Mark Yan
 */

import React from 'react';
import logo from '../logo.svg';
import '../App.css';

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 * 
 * param {Type} - None
 * returns {Type} - None
 */
export const LoginView = () => {
    return (

        //React default page as a place holder
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
};