import { useState } from "react"
import { Link } from "react-router-dom"
import { KakaoSearch, SaveBook } from "../../api/book"

export default function Home() {
  const [text, setText] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onClick = () => {
    callApi()
  }

  const callApi = async () => {
    const params = {
      query: text,
      size: 9,
      target: "title",
    }
    const { documents } = await (await KakaoSearch(params)).data
    console.log(documents)
    for (const item of documents) {
      console.log(item)
      const res = await SaveBook(item)
      console.log(res)
    }
  }

  return (
    <div>
      <Link to={"/auth/login"}>
        <button>LOGIN</button>
      </Link>
      <Link to={"/auth/register"}>
        <button>REGISTER</button>
      </Link>
      <Link to={"/quiz/27"}>
        <button>QUIZ</button>
      </Link>
      <Link to={"/auth/info"}>
        <button>INFO</button>
      </Link>
      <Link to={"/quiz/make/27"}>
        <button>make</button>
      </Link>
      <Link to={"/quiz/make/choice/27"}>
        <button>Quiz Choice</button>
      </Link>
      <Link to={"/book/27"}>
        <button>Book</button>
      </Link>
      ㄴ
      <Link to={"/parents"}>
        <button>Parents</button>
      </Link>
      <br />
      <input onChange={onChange} />
      <button onClick={onClick}>CLICK</button>
    </div>
  )
}
