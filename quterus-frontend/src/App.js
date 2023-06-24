import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import AiQuiz from "./pages/AiQuiz"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="quiz" element={ <Quiz/> } />
        <Route path="aiquiz" element={ <AiQuiz/> } />
      </Routes>
    </div>
  )
}

export default App
