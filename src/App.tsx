import { Routes, Route } from "react-router-dom"
import Home from "./components/home/home"
import Login from "./components/login/login"
import MakeQuiz from "./components/makeQuiz/makeQuiz"
import Quiz from "./components/quiz/quiz"
import Register from "./components/register/register"
import UserInfo from "./components/userInfo/userInfo"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/info" element={<UserInfo />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/make" element={<MakeQuiz />} />
      </Routes>
    </div>
  )
}
