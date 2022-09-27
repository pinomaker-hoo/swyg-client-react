import { useState } from "react"
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
} from "./styles"

export default function Quiz() {
  const [fliped, setFliped] = useState(false)
  const onClick = () => {}
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
                <MainImg src="../../../public/earth.png" />
              </MainImgBox>
              <StarImgBox>
                <StarImg src="../../../public/star.png" />
                <PointText>5P</PointText>
              </StarImgBox>
            </QuizCardFront>
            <QuizCardBack className="back">
              <MainImgBox>
                <MainImg src="../../../public/earth.png" />
              </MainImgBox>
              <StarImgBox>
                <StarImg src="../../../public/star.png" />
                <PointText>CLEAR</PointText>
              </StarImgBox>
            </QuizCardBack>
          </QuizContainer>
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
              <MainImgBox>
                <MainImg src="../../../public/earth.png" />
              </MainImgBox>
              <StarImgBox>
                <StarImg src="../../../public/star.png" />
                <PointText>CLEAR</PointText>
              </StarImgBox>
            </QuizCardBack>
          </QuizContainer>
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
              <MainImgBox>
                <MainImg src="../../../public/earth.png" />
              </MainImgBox>
              <StarImgBox>
                <StarImg src="../../../public/star.png" />
                <PointText>CLEAR</PointText>
              </StarImgBox>
            </QuizCardBack>
          </QuizContainer>
        </QuizBox>
      </InBox>
    </OuterBox>
  )
}
