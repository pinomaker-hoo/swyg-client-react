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
    const { data }: any = await getQuizList(id)
    setDataList(() => data)
    setLoading(() => false)
  }
  const [colorOne, setColorOne] = useState("#442D7A")
  const [colorTwo, setColorTwo] = useState("#442D7A")
  const [answer, setAnswer] = useState(true || false)

  const onClickBtn = async (event: any) => {
    const { name } = await event.target

    if (name === "true") setAnswer(() => true)
    if (name === "false") setAnswer(() => false)
    if (answer) {
      setColorOne(() => "#F18B45")
      setColorTwo(() => "#442d7a")
    } else {
      setColorOne(() => "#442d7a")
      setColorTwo(() => "#F18B45")
    }
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
          {dataList.map((item: any) => (
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
                <QuizTitle>{item.text}</QuizTitle>
                <QuizButton name="true" onClick={onClickBtn} color={colorOne}>
                  O
                </QuizButton>
                <QuizButtonTwo
                  name="false"
                  onClick={onClickBtn}
                  color={colorTwo}
                >
                  X
                </QuizButtonTwo>
              </QuizCardBack>
            </QuizContainer>
          ))}
        </QuizBox>
      </InBox>
    </OuterBox>
  )
}

// const QuizCard = (props: any) => {
//   const [colorOne, setColorOne] = useState("#442D7A")
//   const [colorTwo, setColorTwo] = useState("#442D7A")
//   const [answer, setAnswer] = useState(true || false)

//   const onClickBtn = async (event: any) => {
//     const { name } = await event.target

//     if (name === "true") setAnswer(() => true)
//     if (name === "false") setAnswer(() => false)
//     if (answer) {
//       setColorOne(() => "#F18B45")
//       setColorTwo(() => "#442d7a")
//     } else {
//       setColorOne(() => "#442d7a")
//       setColorTwo(() => "#F18B45")
//     }
//   }

//   return (
//     <QuizContainer>
//       <QuizCardFront className="front">
//         <MainImgBox>
//           <MainImg src="/Earth.png" />
//         </MainImgBox>
//         <StarImgBox>
//           <StarImg src="/smallStar.png" />
//           <PointText>5P</PointText>
//         </StarImgBox>
//       </QuizCardFront>
//       <QuizCardBack className="back">
//         <QuizNumber>Q1</QuizNumber>
//         <QuizTitle>{props.data.text}</QuizTitle>
//         <QuizButton name="true" onClick={onClickBtn} color={colorOne}>
//           O
//         </QuizButton>
//         <QuizButtonTwo name="false" onClick={onClickBtn} color={colorTwo}>
//           X
//         </QuizButtonTwo>
//       </QuizCardBack>
//     </QuizContainer>
//   )
// }
