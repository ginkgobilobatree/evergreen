import React from "react";
import "../App.sass";
import { Questions, Answers, GeneralText } from "../data/text";
import { handleChange } from "../utils/handleChange";

function QuestionForm({ setUserData, step, setStep, userData }) {
  const answer = Object.keys(Answers[step]);
  const value = Object.values(Answers[step])[0];

  function InputRange() {
    return value.map((i) => (
      <div key={i}>
        <input
          onClick={(e) => {
            e.preventDefault();
            handleChange(e, setUserData, userData);
          }}
          type="radio"
          className="radio10"
          id={i}
          name={answer}
          value={i}
        />
        <label htmlFor={i}>{i}</label>
      </div>
    ));
  }

  if (step === 4) {
    return (
      <form className="form">
        <div>
          <h1>{GeneralText.hereQuestions}</h1>
          <div className="questionContainer">
            <p className="question">{Questions[step]}</p>
          </div>
          <div className="inputContainer">
            <InputRange />
          </div>
        </div>
        <button
          className="goBack"
          type="button"
          onClick={() => setStep(step - 1)}
        >
          {GeneralText.goBackButton}
        </button>
      </form>
    );
  }

  return (
    <form className="form">
      <div>
        <h1>{GeneralText.hereQuestions}</h1>
        <div className="questionContainer">
          <p className="question">{Questions[step]}</p>
        </div>
        <div className="input3Container">
          <div>
            <input
              onClick={(e) => {
                e.preventDefault();
                handleChange(e, setUserData, userData);
                setStep(step + 1);
              }}
              type="radio"
              id="input1"
              name={answer}
              value={[value[0][1], value[0][0]]}
            />
            <label htmlFor="input1">{value[0][0]}</label>
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
              name={answer}
              value={[value[1][1], value[1][0]]}
            />

            <label htmlFor="input2">{value[1][0]}</label>
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
              name={answer}
              value={[value[2][1], value[2][0]]}
            />

            <label htmlFor="input3">{value[2][0]}</label>
          </div>
        </div>
      </div>
      <button
        style={{ background: step === 0 ? "gray" : "" }}
        className="goBack"
        type="button"
        disabled={step === 0}
        onClick={() => setStep(step - 1)}
      >
        {GeneralText.goBackButton}
      </button>
    </form>
  );
}

export default QuestionForm;
