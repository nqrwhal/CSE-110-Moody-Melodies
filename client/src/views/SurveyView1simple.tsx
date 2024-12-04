/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React, { useState} from "react";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";
import { useNavigate } from "react-router-dom";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView1simple = () => {
  const navigate = useNavigate();
  const [currentMood, setCurrentMood] = useState<string>("");
  const [targetMood, setTargetMood] = useState<string>("relaxed"); // Default value
  const [genres, setGenres] = useState<string[]>(["pop", "rock"]); // Default values
  const [length, setLength] = useState<number>(10); // Default value
  const handleClick = (emotion: string) => {
    setCurrentMood(emotion);
    navigate("/results", { state: { currentMood: emotion, targetMood, genres, length } });
  };

  return (
    <div>
      <div className="surveyQuestionHeader">How are you feeling</div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/sadEmoji.png"
          text="Sad"
          color="#428bb9"
          onClick={() => handleClick("sad")}
        />
        <SurveyButton
          imageSrc="/imgs/happyEmoji.png"
          text="Happy"
          color="#d5bf2f"
          onClick={() => handleClick("happy")}
        />
        <SurveyButton
          imageSrc="/imgs/stressedEmoji.png"
          text="Stressed"
          color="#d5852f"
          onClick={() => handleClick("stressed")}
        />
        <SurveyButton
          imageSrc="/imgs/energeticEmoji.png"
          text="Energetic"
          color="#2fce29"
          onClick={() => handleClick("energetic")}
        />
        <SurveyButton
          imageSrc="/imgs/angryEmoji.png"
          text="Angry"
          color="#bf322a"
          onClick={() => handleClick("angry")}
        />
      </div>
    </div>
  );
};
