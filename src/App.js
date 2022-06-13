import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Questions";

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
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
