import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getBookListCount } from "../../api/book"
import { saveMate } from "../../api/mate"
import {
  BookBox,
  BookDiv,
  BookImg,
  InBox,
  InputBox,
  LabelText,
  LogoText,
  OuterBox,
  SubBtn,
} from "./styles"

export default function UserInfo() {
  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [bookList, setBookList] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getBookList()
  }, [])

  const getBookList = async () => {
    const { data }: any = await getBookListCount(9)
    setBookList(() => data)
    console.log(data)
  }

  const onChangeText = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => event.target.value)
  }

  const onChangeName = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => event.target.value)
  }

  const saveMateApi = async () => {
    if (!text || !name)
      return alert("메이트 이름이나 최근에 읽은 책을 입력해주세요.")
    const { data } = await saveMate(name)
    return data ? navigate("/home") : alert("ERROR")
  }

  return (
    <OuterBox>
      <InBox>
        <LogoText>matebook</LogoText>
        <label>
          <LabelText>메이트 닉네임</LabelText>
          <InputBox onChange={onChangeName} />
        </label>
        <label>
          <LabelText>최근에 읽은 책</LabelText>
          <InputBox onChange={onChangeText} />
        </label>
        <BookDiv>
          <LabelText>최근에 읽은 책</LabelText>
          {bookList.map((item: any, idx: number) => (
            <BookBox key={item.idx}>
              <BookImg src={item.thumbnail}></BookImg>
            </BookBox>
          ))}
        </BookDiv>
        <SubBtn onClick={saveMateApi}>시작하기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
