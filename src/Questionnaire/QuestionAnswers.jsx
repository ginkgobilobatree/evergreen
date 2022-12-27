import React, { useState, useEffect } from "react";
import "../App.sass";
import { postUserData } from "../utils/postUserData";
import { GeneralText, Units } from "../data/text";

function QuestionAnswers({ userData, step, setStep }) {
  const [result, setResult] = useState({});

  useEffect(() => {
    setResult({});
  }, [step]);

  if (result.calculatedRiskRate) {
    return (
      <div className="result answers">
        <h1>{GeneralText.hereResult}</h1>
        <div>
          <p>{GeneralText.myRiskRate}</p>
          <p>
            {" "}
            {result.calculatedRiskRate}
            {Units.percent}
          </p>
        </div>
        <div>
          <p>{GeneralText.yinAndYang}</p>
          <p>
            {result.riskValues.yin}
            {Units.percent} {GeneralText.yin} <br />
            {result.riskValues.yang}
            {Units.percent} {GeneralText.yang}
          </p>
        </div>
        <div>
          <p>{GeneralText.annualRevenue}</p>
          <p>
            {result.riskValues.return}
            {Units.percent}
          </p>
        </div>
        <div>
          <p>{GeneralText.votality}</p>
          <p>
            {result.riskValues.volatility}
            {Units.percent}
          </p>
        </div>
        <button type="button" onClick={() => setResult({})}>
          {GeneralText.goBackButton}
        </button>
      </div>
    );
  }

  return (
    <div className="answers">
      <h1>{GeneralText.hereAnswers}</h1>
        <p>{userData.goal.split(",")[1]}</p>
        <p>{userData.age.split(",")[1]}</p>
        <p>{userData.duration.split(",")[1]}</p>
        <p>{userData.behaviour.split(",")[1]}</p>
        <p>{userData.selfTest}</p>
      {userData.selfTest.length > 0 && (
        <button type="button" onClick={() => postUserData(userData, setResult)}>
          {GeneralText.showResultButton}
        </button>
      )}
    </div>
  );
}

export default QuestionAnswers;
