import React from "react";
import "../App.sass";
import { GeneralText, Units } from "../data/text";
import { getOldResult } from "../utils/getOldResult";
import { saveUserData } from "../utils/saveUserData";

function StoreUserData({ result, setResult, uniqueURL, setUniqueURL }) {
  if (Object.keys(result).length === 0) {
    //wird gerendert, falls kein Resultat vorliegt
    return (
      <h1>
        {GeneralText.nothingHere}
        <br />
        {GeneralText.answerQuestionsFirst}
      </h1>
    );
  }

  return (
    //entweder Resultat in DB speichern oder altes Resultat aus DB abfragen
    <>
      <div className="form">
        <div className="center">
          <button type="button" onClick={() => saveUserData(result)}>
            {GeneralText.save}
          </button>
          <p>{GeneralText.or}</p>
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
      </div>
      <div className="result answers">
        <h1>{GeneralText.storeResult}</h1>
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
      </div>
    </>
  );
}

export default StoreUserData;
