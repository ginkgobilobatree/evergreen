import React from "react";
import "../App.sass";
import { GeneralText, Units } from "../data/text";

function StoreUserData({result}) {
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
        <button type="button">
          {GeneralText.goBackButton}
        </button>
      </div>
  );
}

export default StoreUserData;
