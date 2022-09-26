import {
  InBox,
  OuterBox,
  Title,
  Text,
  QuizBox,
  QuizCard,
  MainImg,
  StarImg,
  MainImgBox,
  StarImgBox,
  PointText,
} from "./styles"

export default function Quiz() {
  return (
    <OuterBox>
      <InBox>
        <Title>퀴즈 맞추고 30P 얻자!</Title>
        <Text>
          친구들이 낸 퀴즈를 모두 맞추면 북도리가 바깥 세상으로 나올 수 있어!
        </Text>
        <QuizBox>
          <QuizCard>
            <MainImgBox>
              <MainImg src="../../../public/earth.png" />
            </MainImgBox>
            <StarImgBox>
              <StarImg src="../../../public/star.png" />
              <PointText>5P</PointText>
            </StarImgBox>
          </QuizCard>
          <QuizCard>
            <MainImgBox>
              <MainImg src="../../../public/earth.png" />
            </MainImgBox>
            <StarImgBox>
              <StarImg src="../../../public/star.png" />
              <PointText>5P</PointText>
            </StarImgBox>
          </QuizCard>
          <QuizCard>
            <MainImgBox>
              <MainImg src="../../../public/earth.png" />
            </MainImgBox>
            <StarImgBox>
              <StarImg src="../../../public/star.png" />
              <PointText>5P</PointText>
            </StarImgBox>
          </QuizCard>
        </QuizBox>
      </InBox>
    </OuterBox>
  )
}
