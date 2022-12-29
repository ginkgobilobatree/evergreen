import "./App.sass";
import Questionnaire from "./Questionnaire";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreUserData from "./StoreUserData";
import { GeneralText } from "./data/text";
import { useState } from "react";

function App() {

  const [result, setResult] = useState({})

  return (
    <BrowserRouter>
      <h1 className="heroTitle">{GeneralText.heroTitle}</h1>
      <div className="App">
        <Routes>
          <Route path="storedata" element={<StoreUserData result={result} />} />
          <Route path="*" element={<Questionnaire result={result} setResult={setResult} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
