import { Routes, Route } from "react-router-dom"
import Book from "./pages/book/book"
import Home from "./pages/home/home"
import LikeBook from "./pages/likeBook/likeBook"
import Login from "./pages/login/login"
import MakeQuiz from "./pages/makeQuiz/makeQuiz"
import Parents from "./pages/parents/parents"
import Quiz from "./pages/quiz/quiz"
import QuizChoice from "./pages/quizChoice/quizChoice"
import Register from "./pages/register/register"
import UserInfo from "./pages/userInfo/userInfo"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/likebook" element={<LikeBook />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/info" element={<UserInfo />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/make" element={<MakeQuiz />} />
        <Route path="/quiz/make/choice" element={<QuizChoice />} />
      </Routes>
    </div>
  )
}
