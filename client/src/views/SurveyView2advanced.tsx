/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React from "react";
import logo from "../logo.svg";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";
import { sendToServer } from "../utils/api";
import { Link } from "react-router-dom";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView2advanced = () => {
  const handleClick = (emotion: string) => {
    sendToServer("/SpotifyApi/recommendations", { emotion }).catch((error) =>
      console.error("Error:", error)
    );
  };
  return (
    <div>
      <div className="surveyQuestionHeader">How do you want to feel?</div>
      <div className="surveyButtonRow">
        <Link to="/advanced-survey-genres">
          <SurveyButton
            imageSrc="/imgs/calmEmoji.png"
            text="Calm"
            color="#7fcaff"
            onClick={() => handleClick("calm")}
          ></SurveyButton>
        </Link>
        <Link to="/advanced-survey-genres">
          <SurveyButton
            imageSrc="/imgs/focusedEmoji.png"
            text="Focused"
            color="#ce2929"
            onClick={() => handleClick("focused")}
          ></SurveyButton>
        </Link>
        <Link to="/advanced-survey-genres">
          <SurveyButton
            imageSrc="/imgs/confidentEmoji.png"
            text="Confident"
            color="#29ceb0"
            onClick={() => handleClick("confident")}
          ></SurveyButton>
        </Link>
      </div>
      <div className="surveyButtonRow">
        <Link to="/advanced-survey-genres">
          <SurveyButton
            imageSrc="/imgs/comfortedEmoji.png"
            text="Comforted"
            color="#ce9d29"
            onClick={() => handleClick("comforted")}
          ></SurveyButton>
        </Link>
        <Link to="/advanced-survey-genres">
          <SurveyButton
            imageSrc="/imgs/motivatedEmoji.png"
            text="Motivated"
            color="#d967bb"
            onClick={() => handleClick("motivated")}
          ></SurveyButton>
        </Link>
      </div>
    </div>
  );
};
