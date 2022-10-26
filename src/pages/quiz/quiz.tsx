import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
} from "./styles"

export default function Quiz() {
  const [dataList, setDataList] = useState([])
  const [loading, setLoading] = useState(true)

  const { id }: any = useParams()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data } = await getQuizList(id)
    setDataList(() => data)
    setLoading(() => false)
  }

  console.log(dataList)
  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Title>퀴즈 맞추고 30P 얻자!</Title>
        <Text>
          친구들이 낸 퀴즈를 모두 맞추면 북도리가 바깥 세상으로 나올 수 있어!
        </Text>
        <QuizBox>
          {dataList.map((item: any) => (
            <QuizCard key={item.idx} data={item} />
          ))}
        </QuizBox>
      </InBox>
    </OuterBox>
  )
}

const QuizCard = (props: any) => {
  return (
    <QuizContainer>
      <QuizCardFront className="front">
        <MainImgBox>
          <MainImg src="../../../public/earth.png" />
        </MainImgBox>
        <StarImgBox>
          <StarImg src="../../../public/star.png" />
          <PointText>5P</PointText>
        </StarImgBox>
      </QuizCardFront>
      <QuizCardBack className="back">
        <QuizNumber>Q1</QuizNumber>
        <QuizTitle>{props.data.text}</QuizTitle>
        <QuizButton>O</QuizButton>
        <QuizButtonTwo>X</QuizButtonTwo>
      </QuizCardBack>
    </QuizContainer>
  )
}
