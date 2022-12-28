import "./App.sass";
import Questionnaire from "./Questionnaire";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreUserData from "./StoreUserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/storedata" element={<StoreUserData />} />
        <Route path="/*" element={<><h1 className="heroTitle">Code Challenge</h1>
        <div className="App">
          <Questionnaire />
        </div></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
