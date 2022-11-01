import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BookSearch, findBookByIsbn, SaveBook } from "../../api/book"
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
  BookText,
  BookTitle,
  InBox,
  MapBox,
  OuterBox,
  SecondInput,
  SecondInputBox,
  WhiteLine,
} from "./style"

export default function Search() {
  const [bookList, setBookList]: any = useState([])
  const [loading, setLoading]: any = useState(true)
  const [text, setText]: any = useState("")

  let { state } = useLocation()

  useEffect(() => {
    setText(state)
    text && callApi()
  }, [text])

  const callApi = async () => {
    const params = {
      query: text,
      sort: "accuracy",
      page: 1,
      size: 5,
    }
    const { data: kakaoBook }: any = await BookSearch(params)
    setBookList(() => kakaoBook.documents)
    for (const item of kakaoBook.documents) {
      const { data }: any = await SaveBook(item)
    }
    setLoading(() => false)
  }

  const onPress = async (event: any) => {
    if (event.key === "Enter") {
      setText(event.target.value)
    }
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <SecondInputBox>
            <SecondInput onKeyPress={onPress} />
          </SecondInputBox>
          {bookList.map((item: any) => (
            <MapBox key={item.isbn}>
              <BookCard data={item} />
              <WhiteLine />
            </MapBox>
          ))}
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const BookCard = (props: any) => {
  const navigate = useNavigate()

  const onClickLikeBookBtn = async (isbn: string) => {
    const data = await findBook(isbn)
    const logined = await useLogined()
    if (!logined) {
      alert("로그인이 필요합니다.")
      navigate("/")
    } else {
      const { data: responseData } = await saveLikeBook(data.idx)
      responseData ? alert("찜하였습니다.") : alert("ERROR")
    }
  }

  const findBook = async (isbn: string) => {
    const { data } = await findBookByIsbn(isbn)
    return data
  }

  const onClickCommentBtn = async (isbn: string) => {
    const data = await findBook(isbn)
    return navigate(`/book/${data.idx}`)
  }

  return (
    <BookBox>
      <BookLeftBox>
        <BookImg src={props.data.thumbnail} />
      </BookLeftBox>
      <BookMiddleBox>
        {props.data.title.length > 16 ? (
          <BookTitle>{props.data.title.substr(0, 16)} ...</BookTitle>
        ) : (
          <BookTitle>{props.data.title}</BookTitle>
        )}
        <BookSubTitle>
          작가 &nbsp;| &nbsp; {props.data.authors} &nbsp; &nbsp; &nbsp;
          {props.data.publisher}
        </BookSubTitle>
        <BookIntroduce>소개</BookIntroduce>
        <BookText>{props.data.contents.substr(0, 80)} . . .</BookText>
      </BookMiddleBox>
      <BookRightBox>
        <BookBtn1
          onClick={() => onClickCommentBtn(props.data.isbn)}
          color="#F18B45"
        >
          코멘트 달기
        </BookBtn1>
        <BookBtn2
          color="#805FC7"
          onClick={() => onClickLikeBookBtn(props.data.isbn)}
        >
          찜하기
        </BookBtn2>
      </BookRightBox>
    </BookBox>
  )
}
