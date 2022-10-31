import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { KakaoSearch, SaveBook } from "../../api/book"
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

  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    setText(state)
    callApi()
  }, [text])

  const callApi = async () => {
    const params = {
      query: text,
      size: 5,
      target: "title",
    }
    const { data: kakaoBook }: any = await KakaoSearch(params)
    setBookList(() => kakaoBook.documents)
    for (const item of kakaoBook.documents) {
      await SaveBook(item)
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
            <SecondInput placeholder={state} onKeyPress={onPress} />
          </SecondInputBox>
          {bookList.splice(0, 3).map((item: any) => (
            <MapBox key={item.idx}>
              <BookCard data={item} />
              <WhiteLine />
            </MapBox>
          ))}
          {bookList.splice(0, 3).map((item: any) => (
            <MapBox key={item.idx}>
              <BookCard data={item} />
              <WhiteLine />
            </MapBox>
          ))}
          {bookList.splice(0, 3).map((item: any) => (
            <MapBox key={item.idx}>
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
        <BookText>{props.data.contents.substr(0, 80)} . . .</BookText>
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
