import React from "react";
import "../App.sass";
// import { postUserData } from "../utils/postUserData";
import { useState } from "react";

function QuestionAnswers({ userData, step }) {
  const [result, setResult] = useState("");

  async function postUserData() {
    const url =
      "http://localhost:8000/getData";
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setResult(result)
    // console.log(result)
    return result;
  }
  

  return (
    <div className="answers">
      <h1>Hier die Antworten</h1>
      <p>{userData.goal.split(",")[1]}</p>
      <p>{userData.age.split(",")[1]}</p>
      <p>{userData.duration.split(",")[1]}</p>
      <p>{userData.behaviour.split(",")[1]}</p>
      <p>{userData.selfTest}</p>
      {userData.selfTest.length > 0 && step === 4 && (
        <button type="button" onClick={() => postUserData()}>
          Erhalte Risikoklasse
        </button>
      )}
      <p>{result.calculatedRiskRate}</p>
    </div>
  );
}

export default QuestionAnswers;
