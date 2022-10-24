import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBook } from "../../api/book"
import { getReview, saveReview } from "../../api/review"
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
  CommentTextInput,
  ImageBox,
  SubmitBtn,
  Title,
  TopBox,
  InBox,
  OuterBox,
} from "./style"

export default function Book() {
  const [book, setBook]: any = useState()
  const [text, setText]: any = useState()

  useEffect(() => {
    callApi()
  }, [])

  const { id }: any = useParams()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    if (id) {
      const { data } = await getBook(id)
      setBook(() => data)
    }
  }

  const onChangeText = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onClickBtn = async () => {
    const res = await saveReview(text, id)
  }

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
            {book.review.map((item: any) => (
              <Comment id={item.idx} />
            ))}
            <CommentBox>
              <CommentLeft>
                <ImageBox src="../../../public/profile3.jpeg" />
              </CommentLeft>
              <CommentRight>
                <CommentName>김인후</CommentName>
                <CommentTextInput type="text" onChange={onChangeText} />
                <SubmitBtn onClick={onClickBtn}>등록하기</SubmitBtn>
              </CommentRight>
            </CommentBox>
          </BottomBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const Comment = (props: any) => {
  const [review, setReview]: any = useState()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data } = await getReview(props.id)
    setReview(data)
  }

  if (!review) return null
  return (
    <CommentBox>
      <CommentLeft>
        <ImageBox src="../../../public/profile3.jpeg" />
      </CommentLeft>
      <CommentRight>
        <CommentName>{review.user.name}</CommentName>
        <CommentText>{review.text}</CommentText>
        <CommentIcon src="../../../public/icon-like.png" />
        <CommentInfo>5</CommentInfo>
        <CommentIcon src="../../../public/icon-comment.png" />
        <CommentInfo>10</CommentInfo>
      </CommentRight>
    </CommentBox>
  )
}
