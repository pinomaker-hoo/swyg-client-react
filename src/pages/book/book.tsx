import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBook } from "../../api/book"
import Header from "../../components/Header"

import {
  BodyBox,
  BookBox,
  BookBtn,
  BookImage,
  BookInfo,
  BookLeftBox,
  BookRightBox,
  BookStory,
  BookSub,
  BookTextBox,
  BookTitle,
  BottomBox,
  BottomTitle,
  CommentBox,
  CommentIcon,
  CommentInfo,
  CommentLeft,
  CommentName,
  CommentRight,
  CommentText,
  ImageBox,
  Title,
  TopBox,
} from "./style"
import { InBox, OuterBox } from "./style"

export default function Book() {
  const [book, setBook]: any = useState()
  const { id } = useParams()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    if (id) {
      const { data } = await getBook(id)
      setBook(() => data)
    }
  }
  console.log(book)
  if (!book) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <TopBox>
            <Title>키 쑥쑥 영양책</Title>
            <BookBox>
              <BookLeftBox>
                <BookImage src={book.thumbnail} />
              </BookLeftBox>
              <BookRightBox>
                <BookTextBox>
                  <BookTitle>{book.title}</BookTitle>
                  <BookInfo>
                    작가 : {book.authors}, 출판사 : {book.publisher}
                  </BookInfo>
                  <BookSub>줄거리</BookSub>
                  <BookStory>{book.contents}</BookStory>
                  <BookBtn color="#F18B45">퀴즈 맞추기</BookBtn>
                  <BookBtn color="#805FC7">퀴즈 내기</BookBtn>
                </BookTextBox>
              </BookRightBox>
            </BookBox>
          </TopBox>
          <BottomBox>
            <BottomTitle>친구들이 단 코멘트 </BottomTitle>
            <Comment />
          </BottomBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const Comment = () => {
  return (
    <CommentBox>
      <CommentLeft>
        <ImageBox src="../../../public/profile3.jpeg" />
      </CommentLeft>
      <CommentRight>
        <CommentName>김인후</CommentName>
        <CommentText>
          비밀교실은 원하는 것을 상상하면 뭐든 이루어지는 곳이다. 부모님이
          이혼하셔서 아빠와 살고 있는 한이는 엄마와 만나거 싶다고 생각했다.
          그래서 비밀교실에서 엄마를 만나게 됐다. 한이가 엄마를 만나는
          장면에서는 나도 눈물이 날 것 같았다. 시우는 놀이동산처럼 재미있는
          학교를 상상...
        </CommentText>
        <CommentIcon src="../../../public/icon-like.png" />
        <CommentInfo>5</CommentInfo>
        <CommentIcon src="../../../public/icon-comment.png" />
        <CommentInfo>10</CommentInfo>
      </CommentRight>
    </CommentBox>
  )
}
