import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getQuizList } from "../../api/quiz"
import {
  InBox,
  OuterBox,
  Title,
  Text,
  QuizBox,
  QuizCardFront,
  MainImg,
  StarImg,
  MainImgBox,
  StarImgBox,
  PointText,
  QuizContainer,
  QuizCardBack,
  QuizNumber,
  QuizTitle,
  QuizButton,
  QuizButtonTwo,
  SubBtn,
  AnswerImg,
} from "./styles"

export default function QuizTest() {
  const [dataList, setDataList]: any = useState([])
  const [loading, setLoading] = useState(true)
  const [answer, setAnswer] = useState(true || false)

  const { id }: any = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data }: any = await getQuizList(id)
    console.log(data)
    setDataList(data)
    if (data.length < 1) {
      alert("퀴즈가 없습니다.")
      navigate(`/book/${id}`)
    }
    setLoading(() => false)
  }

  const onClickBtn = async (event: any) => {
    const { name } = await event.target
    name === "true" ? setAnswer(true) : setAnswer(false)
  }

  const onClickSubBtn = async () => {
    dataList[0].answer === answer
      ? navigate(`/quiz/true/${dataList[0].idx}`, { state: id })
      : navigate(`/quiz/false/${dataList[0].idx}`, { state: id })
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Title>퀴즈 맞추고 30P 얻자!</Title>
        <Text>
          친구들이 낸 퀴즈를 모두 맞추면 북도리가 바깥 세상으로 나올 수 있어!
        </Text>
        <QuizBox>
          <QuizContainer>
            <QuizCardFront className="front">
              <MainImgBox>
                <MainImg src="/Earth.png" />
              </MainImgBox>
              <StarImgBox>
                <StarImg src="/smallStar.png" />
                <PointText>5P</PointText>
              </StarImgBox>
            </QuizCardFront>
            <QuizCardBack className="back">
              <QuizNumber>Q1</QuizNumber>
              <QuizTitle>{dataList[0].text}</QuizTitle>
              <QuizButton
                name="true"
                onClick={onClickBtn}
                color={answer ? "#F18B45" : "#442d7a"}
              >
                <AnswerImg src="/true.png" />
              </QuizButton>
              <QuizButtonTwo
                name="false"
                onClick={onClickBtn}
                color={answer ? "#442d7a" : "#F18B45"}
              >
                <AnswerImg src="/false.png" />
              </QuizButtonTwo>
            </QuizCardBack>
          </QuizContainer>
        </QuizBox>
        <SubBtn onClick={onClickSubBtn}>결과보기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
