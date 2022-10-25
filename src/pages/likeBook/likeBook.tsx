import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { getLikeBookList } from "../../api/likeBook"
import {
  BodyBox,
  BookBox,
  InBox,
  LeftBox,
  MiddleBox,
  OuterBox,
  RightBox,
  TitleText,
  ImageBox,
  BookInfo,
  BookStory,
  BookTitle,
  BookBtn,
} from "./style"
import { Link } from "react-router-dom"

export default function LikeBook() {
  const [bookList, setBookList]: any = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data } = await getLikeBookList()
    setBookList(() => data)
    setLoading(() => false)
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <TitleText>전체 {bookList.length}권</TitleText>
          {bookList.map((item: any) => (
            <Book data={item.book} key={item.idx} />
          ))}
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const Book = (props: any) => {
  const { data } = props
  return (
    <BookBox>
      <LeftBox>
        <ImageBox src={data.thumbnail} />
      </LeftBox>
      <MiddleBox>
        <BookTitle>{data.title}</BookTitle>
        <BookInfo>
          작가 : {data.authors}, 출판사 : {data.publisher}
        </BookInfo>
        <BookStory>{data.contents}</BookStory>
        <Link to={`/book/${data.idx}`}>
          <BookBtn>미리보기</BookBtn>
        </Link>
      </MiddleBox>
      <RightBox></RightBox>
    </BookBox>
  )
}