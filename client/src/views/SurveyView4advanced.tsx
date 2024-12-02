/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React from "react";
import logo from "../logo.svg";
import "./SurveyViewStyle.css";
import SurveySlider from "../components/SurveySlider";
import { Link } from "react-router-dom";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView4advanced = () => {
  return (
    <div>
      <div className="surveyQuestionHeader">
        How Many Songs Would You Like to Listen To?
      </div>
      <SurveySlider></SurveySlider>
      <Link to="/results">
        <button style={{ padding: '10px 20px', fontSize: '20px' }} className="exit">
            Finish
        </button>     
      </Link>

    </div>
  );
};
