import React from "react";
import "../App.sass";
import { Questions, Answers } from "../data/text";
import { handleChange } from "../utils/handleChange";

function QuestionForm({ setUserData, step, setStep, userData }) {
  if (step === 4) {
    return (
      <form>
        <h1>Ich möchte mein Vermögen...</h1>
        <p className="question">{Questions[step]}</p>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="one"
            name={Object.keys(Answers[step])}
            value="1"
          />
          <label htmlFor="one">1</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="two"
            name={Object.keys(Answers[step])}
            value="2"
          />
          <label htmlFor="two">2</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="three"
            name={Object.keys(Answers[step])}
            value="3"
          />
          <label htmlFor="three">3</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="four"
            name={Object.keys(Answers[step])}
            value="4"
          />
          <label htmlFor="four">4</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="five"
            name={Object.keys(Answers[step])}
            value="5"
          />
          <label htmlFor="five">5</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="six"
            name={Object.keys(Answers[step])}
            value="6"
          />
          <label htmlFor="six">6</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="seven"
            name={Object.keys(Answers[step])}
            value="7"
          />
          <label htmlFor="seven">7</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="eight"
            name={Object.keys(Answers[step])}
            value="8"
          />
          <label htmlFor="eight">8</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="nine"
            name={Object.keys(Answers[step])}
            value="9"
          />
          <label htmlFor="nine">9</label>
        </div>
        <div>
          <input
            onClick={(e) => {
              e.preventDefault();
              handleChange(e, setUserData, userData);
            }}
            type="radio"
            id="ten"
            name={Object.keys(Answers[step])}
            value="10"
          />
          <label htmlFor="ten">10</label>
        </div>
        <button
          type="button"
          onClick={() => setStep(step - 1)}
        >
          Zurück
        </button>
      </form>
    );
  }

  return (
    <form>
      <h1>Ich möchte mein Vermögen...</h1>
      <p className="question">{Questions[step]}</p>
      <div>
        <input
          onClick={(e) => {
            e.preventDefault();
            handleChange(e, setUserData, userData);
            setStep(step + 1);
          }}
          type="radio"
          id="input1"
          name={Object.keys(Answers[step])}
          value={Object.values(Answers[step])[0][0][1]}
        />
        <label htmlFor="input1">{Object.values(Answers[step])[0][0][0]}</label>
      </div>
      <div>
        <input
          onClick={(e) => {
            e.preventDefault();
            handleChange(e, setUserData, userData);
            setStep(step + 1);
          }}
          type="radio"
          id="input2"
          name={Object.keys(Answers[step])}
          value={Object.values(Answers[step])[0][1][1]}
        />
        <label htmlFor="input2">{Object.values(Answers[step])[0][1][0]}</label>
      </div>
      <div>
        <input
          onClick={(e) => {
            e.preventDefault();
            handleChange(e, setUserData, userData);
            setStep(step + 1);
          }}
          type="radio"
          id="input3"
          name={Object.keys(Answers[step])}
          value={Object.values(Answers[step])[0][2][1]}
        />
        <label htmlFor="input3">{Object.values(Answers[step])[0][2][0]}</label>
      </div>
      <button
        type="button"
        disabled={step === 0}
        onClick={() => setStep(step - 1)}
      >
        Zurück
      </button>
    </form>
  );
}

export default QuestionForm;
