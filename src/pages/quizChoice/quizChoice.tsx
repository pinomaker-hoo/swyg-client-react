import { useState } from "react"
import { Link } from "react-router-dom"
import {
  InBox,
  OuterBox,
  Title,
  Text,
  ChoiceDiv,
  ChoiceBox,
  BoxText,
  SubBtn,
} from "./style"

export default function QuizChoice() {
  const [color, setColor] = useState("#442d7a")
  const onClick = () => {
    color === "#442d7a" ? setColor("#F18B45") : setColor("#442d7a")
  }

  return (
    <OuterBox>
      <InBox>
        <Title>나도 퀴즈 내볼까?</Title>
        <Text>내가 만든 퀴즈를 다른 친구들이 풀어볼 수 있어!</Text>
        <ChoiceDiv>
          <ChoiceBox color={color} onClick={onClick}>
            <BoxText>OX 퀴즈</BoxText>
          </ChoiceBox>
          <ChoiceBox color="#442d7a">
            <BoxText>객관식</BoxText>
          </ChoiceBox>
          <ChoiceBox color="#442d7a">
            <BoxText>주관식</BoxText>
          </ChoiceBox>
        </ChoiceDiv>
        <Link to={"/quiz/make"}>
          <SubBtn>선택완료</SubBtn>
        </Link>
      </InBox>
    </OuterBox>
  )
}
