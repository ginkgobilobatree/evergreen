import "./App.sass";
import QuestionAnswers from "./Questionnaire/QuestionAnswers";
import QuestionForm from "./Questionnaire/QuestionForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreUserData from "./StoreUserData/StoreUserData";
import { GeneralText } from "./data/text";
import { useState } from "react";

function App() {
  const [uniqueURL, setUniqueURL] = useState(""); //man erhält eine einzigartige Nummer (keine URL)
  const [result, setResult] = useState({}); //setzt Daten aus der API in den state
  const [step, setStep] = useState(0); //Fragenkatalog ist in array; step setzt index
  const [userData, setUserData] = useState({
    //setzt beantwortete Fragen in den state
    goal: "",
    age: "",
    duration: "",
    behaviour: "",
    selfTest: "",
  });

  return (
    <BrowserRouter>
      <h1 className="heroTitle">{GeneralText.heroTitle}</h1>
      <div className="App">
        <Routes>
          <Route
            path="storedata"
            element={
              <StoreUserData
                uniqueURL={uniqueURL}
                setUniqueURL={setUniqueURL}
                result={result}
                setResult={setResult}
              />
            }
          />
          <Route
            path="*"
            element={
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
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
