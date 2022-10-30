import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getQuiz } from "../../api/quiz"
import {
  Img,
  InBox,
  OuterBox,
  QuizButton,
  QuizButtonTwo,
  QuizCardBack,
  QuizContainer,
  QuizImg,
  QuizNumber,
  QuizTitle,
  SubBtn,
  Title,
} from "./style"

export default function QuizFalse() {
  const [quiz, setQuiz]: any = useState()
  const [loading, setLoading] = useState(true)

  const { id }: any = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data }: any = await getQuiz(id)
    setQuiz(() => data)
    setLoading(() => false)
  }

  const onClickCheckBtn = () => {
    navigate(`/book/${id}`)
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Title>어떤 퀴즈를 틀렸는지 확인해봐!</Title>
        <QuizContainer>
          <Img src="/duck.png" />
          <QuizCardBack className="back">
            <QuizNumber>Q1</QuizNumber>
            <QuizTitle>{quiz.text}</QuizTitle>
            <QuizButton color={quiz.answer ? "#F18B45" : "#442d7a"}>
              <QuizImg src="/true.png" />
            </QuizButton>
            <QuizButtonTwo color={quiz.answer ? "#442d7a" : "#F18B45"}>
              <QuizImg src="/false.png" />
            </QuizButtonTwo>
          </QuizCardBack>
        </QuizContainer>
        <br />
        <SubBtn onClick={onClickCheckBtn}>확인하기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
