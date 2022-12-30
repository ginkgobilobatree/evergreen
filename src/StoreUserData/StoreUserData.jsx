import React, { useState } from "react";
import "../App.sass";
import { GeneralText, Units } from "../data/text";
import { saveUserData } from "../utils/saveUserData";

function StoreUserData({ result }) {
  const [uniqueURL, setUniqueURL] = useState("");

  if (Object.keys(result).length === 0) {
    return (
      <h1>
        {GeneralText.nothingHere}
        <br />
        {GeneralText.answerQuestionsFirst}
      </h1>
    );
  }

  return (
    <>
      <div className="form">
        <button type="button" onClick={() => saveUserData(result)} >{GeneralText.save}</button>
        <p>{GeneralText.or}</p>
        <input
          type="text"
          id="oldResult"
          value={uniqueURL}
          placeholder={GeneralText.oldResult}
          onChange={(e) => setUniqueURL(e.target.value)}
        />
        <button type="button">{GeneralText.show}</button>
        <p>{uniqueURL}</p>
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
