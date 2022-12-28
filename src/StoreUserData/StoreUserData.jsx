import React from "react";
import "../App.sass";
import { GeneralText } from "../data/text";

function StoreUserData() {
  return (
    <>
      <div className="form">
        <h1>{GeneralText.pleaseLogin}</h1>
        <form className="login">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="button">{GeneralText.loginButton}</button>
        </form>
      </div>
      <div className="answers">
        
      </div>
    </>
  );
}

export default StoreUserData;
