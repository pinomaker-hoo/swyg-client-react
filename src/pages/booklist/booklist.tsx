import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getBookListCount } from "../../api/book"
import { saveLikeBook } from "../../api/likeBook"
import { useLogined } from "../../common/Hooks"
import Header from "../../components/Header"
import {
  BodyBox,
  BookBox,
  BookBtn1,
  BookBtn2,
  BookImg,
  BookIntroduce,
  BookLeftBox,
  BookMiddleBox,
  BookRightBox,
  BookSubTitle,
  BookTagBtn,
  BookText,
  BookTitle,
  InBox,
  OuterBox,
  WhiteLine,
} from "./style"

export default function BookList() {
  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data } = await getBookListCount(10)
    setBookList(() => data)
    setLoading(() => false)
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <BookTagBtn>#흥미진진한</BookTagBtn>
          {bookList.splice(0, 3).map((item: any) => (
            <>
              <BookCard data={item} />
              <WhiteLine />
            </>
          ))}
          <BookTagBtn>#흥미진진한</BookTagBtn>
          {bookList.splice(0, 3).map((item: any) => (
            <>
              <BookCard data={item} />
              <WhiteLine />
            </>
          ))}
          <BookTagBtn>#흥미진진한</BookTagBtn>
          {bookList.splice(0, 3).map((item: any) => (
            <>
              <BookCard data={item} />
              <WhiteLine />
            </>
          ))}
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const BookCard = (props: any) => {
  const navigate = useNavigate()
  const onClickLikeBookBtn = async (id: string) => {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인이 필요합니다.")
      navigate("/")
    } else {
      const { data } = await saveLikeBook(id)
      data ? alert("찜하였습니다.") : alert("ERROR")
    }
  }
  return (
    <BookBox>
      <BookLeftBox>
        <BookImg src={props.data.thumbnail} />
      </BookLeftBox>
      <BookMiddleBox>
        <BookTitle>{props.data.title}</BookTitle>
        <BookSubTitle>
          작가 {props.data.authors} {props.data.publisher}
        </BookSubTitle>
        <BookIntroduce>소개</BookIntroduce>
        <BookText>{props.data.contents.substr(0, 120)} . . .</BookText>
      </BookMiddleBox>
      <BookRightBox>
        <Link to={`/book/${props.data.idx}`}>
          <BookBtn1 color="#F18B45">코멘트 달기</BookBtn1>
        </Link>
        <BookBtn2
          color="#805FC7"
          onClick={() => onClickLikeBookBtn(props.data.idx)}
        >
          찜하기
        </BookBtn2>
      </BookRightBox>
    </BookBox>
  )
}
