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
          type="radio"
          id="input1"
          name="oneOfThree"
          value={Object.values(Answers[step])[0][0][1]}
        />
        <label for="input1">{Object.values(Answers[step])[0][0][0]}</label>
      </div>
      <div>
        <input
          type="radio"
          id="input2"
          name="oneOfThree"
          value={Object.values(Answers[step])[0][1][1]}
        />
        <label for="input2">{Object.values(Answers[step])[0][1][0]}</label>
      </div>

      <div>
        <input
          type="radio"
          id="input3"
          name="oneOfThree"
          value={Object.values(Answers[step])[0][2][1]}
        />
        <label for="input3">{Object.values(Answers[step])[0][2][0]}</label>
      </div>
    </form>
  );
}

export default QuestionForm;
