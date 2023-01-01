import React, { useEffect } from "react";
import "../App.sass";
import { postUserData } from "../utils/postUserData";
import { GeneralText, Units } from "../data/text";
import { giveGermanText } from "../utils/giveGermanText";
import { Link } from "react-router-dom";
import { getOldResult } from "../utils/getOldResult";

function QuestionAnswers({
  userData,
  step,
  result,
  setResult,
  uniqueURL,
  setUniqueURL,
}) {
  useEffect(() => {
    setResult({});
  }, [step, setResult]);

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
        <Link className="storeData" to="/storedata">
          Resultat speichern
        </Link>
      </div>
    );
  }

  return (
    <div className="answers">
      {step > 0 && (
        <>
          <h1>{GeneralText.hereAnswers}</h1>
          <p>{giveGermanText(userData, "goal")}</p>
          <p>{giveGermanText(userData, "age")}</p>
          <p>{giveGermanText(userData, "duration")}</p>
          <p>{giveGermanText(userData, "behaviour")}</p>
          <p>{userData.selfTest}</p>
          {userData.selfTest.length > 0 && (
            <button
              type="button"
              onClick={() => postUserData(userData, setResult)}
            >
              {GeneralText.showResultButton}
            </button>
          )}
        </>
      )}
      {!step && (
        <div className="showResult">
          <input
            type="text"
            id="oldResult"
            value={uniqueURL}
            placeholder={GeneralText.oldResult}
            onChange={(e) => setUniqueURL(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              getOldResult(uniqueURL, setResult);
              setUniqueURL("");
            }}
          >
            {GeneralText.show}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionAnswers;
