import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <Link to={"/auth/login"}>
        <button>LOGIN</button>
      </Link>
      <Link to={"/auth/register"}>
        <button>REGISTER</button>
      </Link>
      <Link to={"/quiz"}>
        <button>QUIZ</button>
      </Link>
      <Link to={"/auth/info"}>
        <button>INFO</button>
      </Link>
      <Link to={"/quiz/make"}>
        <button>make</button>
      </Link>
      <Link to={"/quiz/make/choice"}>
        <button>Quiz Choice</button>
      </Link>
      <Link to={"/book/1"}>
        <button>Book</button>
      </Link>
    </div>
  )
}
