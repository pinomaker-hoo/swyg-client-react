import React, { useEffect, useState } from "react"
import { KakaoSearch, SaveBook } from "../../api/book"
import {
  BookBox,
  BookDiv,
  BookImg,
  InBox,
  InputBox,
  LabelText,
  LogoText,
  OuterBox,
} from "./styles"

export default function UserInfo() {
  const [text, setText] = useState("")
  const [bookList, setBookList] = useState([])

  // useEffect(() => {
  //   callApi()
  // }, [])

  const callApi = async () => {
    const params = {
      query: text,
      size: 9,
      target: "title",
    }
    const { documents } = await (await KakaoSearch(params)).data
    setBookList(() => documents)
    for (const item of documents) {
      console.log(item)
      const res = await SaveBook(item)
      console.log(res)
    }
  }

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => event.target.value)
  }

  const onPress = async (event: any) => {
    if (event.key === "Enter") callApi()
  }

  return (
    <OuterBox>
      <InBox>
        <LogoText>matebook</LogoText>
        <label>
          <LabelText>메이트 닉네임</LabelText>
          <InputBox />
        </label>
        <label>
          <LabelText>최근에 읽은 책</LabelText>
          <InputBox onKeyDown={onPress} onChange={onChange} />
        </label>
        <BookDiv>
          <LabelText>최근에 읽은 책</LabelText>
          {bookList.map((item: any) => (
            <BookBox>
              <BookImg src={item.thumbnail}></BookImg>
            </BookBox>
          ))}
        </BookDiv>
      </InBox>
    </OuterBox>
  )
}
