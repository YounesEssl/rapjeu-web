import './App.css';
import Question from "./components/questions"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <main>
          <div className="questioncontainer">
            <Question />
          </div>
        </main>
    </div>
  );
}

export default App;
