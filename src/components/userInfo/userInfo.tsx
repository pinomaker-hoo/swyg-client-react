import React, { useEffect, useState } from "react"
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

  useEffect(() => {
    getBookList()
  }, [])

  const getBookList = async () => {
    const getBookList: [] = await getBookListCount(9)
    setBookList(() => getBookList)
  }

  const onChangeText = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => event.target.value)
  }

  const onChangeName = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => event.target.value)
  }
  const saveMateApi = async () => {
    const res = await saveMate(name)
    console.log(res)
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
          {bookList.map((item: any) => (
            <BookBox>
              <BookImg src={item.thumbnail}></BookImg>
            </BookBox>
          ))}
        </BookDiv>
        <SubBtn onClick={saveMateApi}>시작하기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
