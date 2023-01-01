import QuestionAnswers from "./QuestionAnswers";
import QuestionForm from "./QuestionForm";
import { useState } from "react";

function Questionnaire({ result, setResult, setUniqueURL, uniqueURL }) {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    goal: "",
    age: "",
    duration: "",
    behaviour: "",
    selfTest: "",
  });

  return (
    <>
      <QuestionForm
        setUserData={setUserData}
        userData={userData}
        setStep={setStep}
        step={step}
      />
      <QuestionAnswers
        uniqueURL={uniqueURL}
        setUniqueURL={setUniqueURL}
        userData={userData}
        step={step}
        setStep={setStep}
        result={result}
        setResult={setResult}
      />
    </>
  );
}

export default Questionnaire;
