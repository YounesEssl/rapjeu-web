import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Questions";
import DuelRapmon from "./components/DuelRapmon";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div className="questioncontainer">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Questions" element={<Question />} />
              <Route path="/Duel" element={<DuelRapmon />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
