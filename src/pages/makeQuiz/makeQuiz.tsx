import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { saveQuiz } from "../../api/quiz"
import {
  FalseBtn,
  InBox,
  InputBox,
  MidBox,
  OuterBox,
  SubBtn,
  Title,
  TrueBtn,
} from "./style"

export default function MakeQuiz() {
  const navigate = useNavigate()

  const [answer, setAnswer] = useState(true || false)
  const [colorOne, setColorOne] = useState("#442D7A")
  const [colorTwo, setColorTwo] = useState("#442D7A")
  const [text, setText] = useState("")

  const { id }: any = useParams()

  const onClick = async () => {
    try {
      const { data }: any = await saveQuiz(text, answer, id)
      return data ? navigate("/home") : alert("ERROR")
    } catch (err) {
      console.log(err)
    }
  }

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => event.target.value)
  }

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

  return (
    <OuterBox>
      <InBox>
        <Title>OX 퀴즈</Title>
        <MidBox>
          <InputBox placeholder="퀴즈를 입력해 주세요." onChange={onChange} />
          <TrueBtn name="true" onClick={onClickBtn} color={colorOne}>
            O
          </TrueBtn>
          <FalseBtn name="false" onClick={onClickBtn} color={colorTwo}>
            X
          </FalseBtn>
        </MidBox>
        <SubBtn onClick={onClick}>퀴즈내기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
