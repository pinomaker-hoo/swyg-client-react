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
} from "./styles"

export default function QuizTest() {
  const [dataList, setDataList]: any = useState([])
  const [loading, setLoading] = useState(true)
  const [colorOne, setColorOne] = useState("#442D7A")
  const [colorTwo, setColorTwo] = useState("#442D7A")
  const [answer, setAnswer] = useState(true || false)

  const { id }: any = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data } = await getQuizList(id)
    setDataList(() => data)
    setLoading(() => false)
  }

  const onClickBtn = async (event: any) => {
    const { name } = await event.target
    name === "true" ? setAnswer(true) : setAnswer(false)
  }

  const onClickSubBtn = async () => {
    console.log(dataList[0].answer)
    console.log(answer)
    dataList[0].answer === answer
      ? navigate("/quiz/true")
      : navigate(`/quiz/false/${dataList[0].idx}`)
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
                O
              </QuizButton>
              <QuizButtonTwo
                name="false"
                onClick={onClickBtn}
                color={answer ? "#442d7a" : "#F18B45"}
              >
                X
              </QuizButtonTwo>
            </QuizCardBack>
          </QuizContainer>
        </QuizBox>
        <SubBtn onClick={onClickSubBtn}>결과보기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
