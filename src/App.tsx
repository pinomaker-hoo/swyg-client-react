// ** Router Imports
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Book from "./pages/book/book"
import BookList from "./pages/booklist/booklist"
import Home from "./pages/home/home"
import LikeBook from "./pages/likeBook/likeBook"
import Login from "./pages/login/login"
import MakeQuiz from "./pages/makeQuiz/makeQuiz"
import Parents from "./pages/parents/parents"
import QuizChoice from "./pages/quizChoice/quizChoice"
import QuizTest from "./pages/quizTest/quizTest"
import Register from "./pages/register/register"
import UserInfo from "./pages/userInfo/userInfo"
import QuizTrue from "./pages/quizTrue/quizTrue"
import QuizFalse from "./pages/quizFalse/quizFalse"
import CheckQuiz from "./pages/checkQuiz/checkQuiz"
import PointQuiz from "./pages/pointQuiz/pointQuiz"
import CheckComment from "./pages/checkComment/checkComment"
import PointComment from "./pages/pointComment/pointComment"
import Search from "./pages/search/search"
import Level from "./pages/level/level"
import { ProtectRoute, PublicRoute } from "./utils/protect-route"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/info" element={<UserInfo />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/list" element={<BookList />} />
        <Route path="/book/search" element={<Search />} />
        <Route path="/book/comment/:id" element={<CheckComment />} />
        <Route path="/book/comment/point/:id" element={<PointComment />} />
        <Route path="/likebook" element={<LikeBook />} />
        <Route path="/parents" element={<Parents />} />
        {/* <Route path="/quiz/:id" element={<Quiz />} /> */}
        <Route path="/quiz/check/:id" element={<CheckQuiz />} />
        <Route path="/quiz/point/:id" element={<PointQuiz />} />
        <Route path="/quiz/:id" element={<QuizTest />} />
        <Route path="/quiz/make/:id" element={<MakeQuiz />} />
        <Route path="/quiz/make/choice/:id" element={<QuizChoice />} />
        <Route path="/quiz/true/:id" element={<QuizTrue />} />
        <Route path="/quiz/false/:id" element={<QuizFalse />} />
        <Route path="/level" element={<Level />} />
        <Route element={<ProtectRoute />}>
          <Route path="/protect" element={<h1>Protect Test</h1>} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/public" element={<h1>public Test</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
