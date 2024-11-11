/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React from "react";
import logo from "../logo.svg";
import "./SurveyViewStyle.css";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView = () => {
  return (
    <div>
      <div className="surveyQuestionHeader">How are you feeling</div>
      <div className="surveyButtonGrid">
        <button>a</button>
        <button>a</button>
        <button>a</button>
        <button>a</button>
        <button>a</button>
      </div>
    </div>
  );
};
