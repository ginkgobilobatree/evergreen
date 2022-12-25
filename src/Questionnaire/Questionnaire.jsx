import QuestionAnswers from "./QuestionAnswers";
import QuestionForm from "./QuestionForm";
import { useState } from "react";

function Questionnaire() {
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
      <QuestionAnswers userData={userData} step={step} />
    </>
  );
}

export default Questionnaire;
