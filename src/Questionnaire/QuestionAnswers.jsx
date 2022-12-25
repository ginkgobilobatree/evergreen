import React from "react";
import "../App.sass";
import { postUserData } from "../utils/postUserData";

function QuestionAnswers({ userData, step }) {
  let userDataCopy = { ...userData };

  return (
    <div className="answers">
      <h1>Hier die Antworten</h1>
      <p>{userDataCopy.goal.split(",")[1]}</p>
      <p>{userDataCopy.age.split(",")[1]}</p>
      <p>{userDataCopy.duration.split(",")[1]}</p>
      <p>{userDataCopy.behaviour.split(",")[1]}</p>
      <p>{userDataCopy.selfTest}</p>
      {userDataCopy.selfTest.length > 0 && step === 4 && (
        <button type="button" onClick={postUserData}>Erhalte Risikoklasse</button>
      )}
      <p>{}</p>
    </div>
  );
}

export default QuestionAnswers;
