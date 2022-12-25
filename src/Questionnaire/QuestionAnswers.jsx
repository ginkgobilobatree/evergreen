import React from "react";
import "../App.sass";

function QuestionAnswers({ userData }) {
  return (
    <div className="answers">
      <h1>Hier die Antworten</h1>
      <p>{userData.goal.split(",")[1]}</p>
      <p>{userData.age.split(",")[1]}</p>
      <p>{userData.duration.split(",")[1]}</p>
      <p>{userData.behaviour.split(",")[1]}</p>
      <p>{userData.selfTest}</p>
    </div>
  );
}

export default QuestionAnswers;
