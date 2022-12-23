import React from "react";
import "../App.sass";
import { Questions, Answers } from "../text/text";

function QuestionForm({ setUserData, step, setStep }) {
  return (
    <form>
      <h1>Ich möchte mein Vermögen...</h1>
      <p className="question">{Questions[step]}</p>
      <div>
        <input
          onClick={(e) => {e.preventDefault(); setStep(step + 1);}}
          type="radio"
          id="input1"
          name="oneOfThree"
          value={Object.values(Answers[step])[0][0][1]}
        />
        <label htmlFor="input1">{Object.values(Answers[step])[0][0][0]}</label>
      </div>
      <div>
        <input
          onClick={(e) => {e.preventDefault(); setStep(step + 1);}}
          type="radio"
          id="input2"
          name="oneOfThree"
          value={Object.values(Answers[step])[0][1][1]}
        />
        <label htmlFor="input2">{Object.values(Answers[step])[0][1][0]}</label>
      </div>
      <div>
        <input
          onClick={(e) => {e.preventDefault(); setStep(step + 1);}}
          type="radio"
          id="input3"
          name="oneOfThree"
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
