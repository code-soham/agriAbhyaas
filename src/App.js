import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
