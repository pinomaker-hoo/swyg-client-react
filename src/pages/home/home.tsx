import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getBookListCount, KakaoSearch, SaveBook } from "../../api/book"
import { getMate } from "../../api/mate"
import Header from "../../components/Header"
import {
  BodyBox,
  FifthBox,
  FifthBtn,
  FifthImg,
  FifthLeftBox,
  FifthText,
  FifthTitle,
  FirstBox,
  FirstIcon,
  FirstIconText,
  FirstImg,
  FirstInfoBox,
  FirstLeftBox,
  FirstRightBox,
  FirstStateBar,
  FirstStateBox,
  FirstStateLine,
  FirstStateText,
  FirstTitleText,
  FourthBody,
  FourthBox,
  FourthImgCard,
  FourthImgCardImg,
  FourthImgCardLeft,
  FourthImgCardRight,
  FourthImgCardText,
  FourthImgCardTitle,
  FourthTitle,
  InBox,
  MapBox,
  OuterBox,
  PText,
  SecondBox,
  SecondInput,
  SecondInputBox,
  SecondTagBtn,
  SecondTagBtn1,
  SecondTagBtnBox,
  SecondTitle,
  ThirdBookCard,
  ThirdBookCard2,
  ThirdBookCard3,
  ThirdBookCardBox,
  ThirdBookCardImg,
  ThirdBookCardImg2,
  ThirdBookCardImg3,
  ThirdBookCardText,
  ThirdBookCardText2,
  ThirdBookCardText3,
  ThirdBox,
  ThirdSubTitle,
  ThirdTitle,
} from "./style"

export default function Home() {
  const [text, setText] = useState("")
  const [bookList, setBookList]: any = useState([])
  const [loading, setLoading] = useState(true)
  const [mate, setMate]: any = useState()
  const [point, setPoint]: any = useState()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data: bookData }: any = await getBookListCount(15)
    console.log(bookData)
    const { data: mateData }: any = await getMate()
    setBookList(() => bookData)
    setMate(() => mateData.mate)
    setPoint(() => mateData.point)
    setLoading(() => false)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onClickBook = async (event: any) => {
    if (event.key === "Enter") {
      const params = {
        query: text,
        size: 3,
        target: "title",
      }
      const { data }: any = await KakaoSearch(params)
      for (const item of data.documents) {
        const { data } = await SaveBook(item)
      }
    }
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <FirstBox>
            <FirstLeftBox>
              <PText>
                {mate.user.name}아 {mate.name}을 만난 걸 환영해
              </PText>
              <FirstTitleText>바깥 세상이 궁금해!</FirstTitleText>
              <FirstInfoBox>
                <FirstIcon src="/level.png" />
                <FirstIconText>Lv1.</FirstIconText>
                <FirstIcon src="/homestar.png" />
                <FirstIconText>{point}p</FirstIconText>
                <FirstIcon src="/comment.png" />
                <FirstIconText>코멘트</FirstIconText>
                <FirstIcon src="/quiz.png" />
                <FirstIconText>퀴즈</FirstIconText>
              </FirstInfoBox>
              <FirstStateBox>
                <FirstStateLine>
                  <FirstStateText>감정</FirstStateText>
                  <FirstStateText>호기심</FirstStateText>
                  <FirstStateBar></FirstStateBar>
                  <FirstStateText>100%</FirstStateText>
                </FirstStateLine>
                <FirstStateLine>
                  <FirstStateText>식욕</FirstStateText>
                  <FirstStateText>무</FirstStateText>
                  <FirstStateText>0%</FirstStateText>
                </FirstStateLine>
                <FirstStateLine>
                  <FirstStateText>아픔</FirstStateText>
                  <FirstStateText>무</FirstStateText>
                  <FirstStateText>0%</FirstStateText>
                </FirstStateLine>
              </FirstStateBox>
            </FirstLeftBox>
            <FirstRightBox>
              <FirstImg src="/egg.png" />
            </FirstRightBox>
          </FirstBox>
          <SecondBox>
            <SecondTitle>어떤 책을 찾고 있어?</SecondTitle>
            <SecondInputBox>
              <SecondInput
                onChange={onChange}
                placeholder="ex. 안나의 일기"
                onKeyPress={onClickBook}
              />
            </SecondInputBox>
            <SecondTagBtnBox>
              <SecondTagBtn1># 흥미진진한</SecondTagBtn1>
              <SecondTagBtn># 모험적인</SecondTagBtn>
              <SecondTagBtn># 인기있는</SecondTagBtn>
              <SecondTagBtn># 스릴있는</SecondTagBtn>
              <SecondTagBtn># 신기한</SecondTagBtn>
            </SecondTagBtnBox>
          </SecondBox>
          <ThirdBox>
            <ThirdTitle>북도리 성장을 도와주는 책</ThirdTitle>
            <ThirdSubTitle>
              관심 있는 카테고리 책을 골라 <br />
              메이트 성장을 도울 수 있어요!
            </ThirdSubTitle>
            <ThirdBookCardBox>
              <Link to={`/book/${bookList[0].idx}`}>
                <ThirdBook2 data={bookList[0]} />
              </Link>
              <Link to={`/book/${bookList[1].idx}`}>
                <ThirdBook3 data={bookList[1]} />
              </Link>
              <Link to={`/book/${bookList[2].idx}`}>
                <ThirdBook data={bookList[2]} />
              </Link>
              <Link to={`/book/${bookList[3].idx}`}>
                <ThirdBook3 data={bookList[3]} />
              </Link>
              <Link to={`/book/${bookList[4].idx}`}>
                {" "}
                <ThirdBook2 data={bookList[4]} />
              </Link>
            </ThirdBookCardBox>
          </ThirdBox>
          <FourthBox>
            <FourthTitle>친구들이 가장 많이 읽은 Top 6</FourthTitle>
            <FourthBody>
              {bookList.splice(0, 6).map((item: any) => (
                <MapBox key={item.idx}>
                  <Link to={`/book/${item.idx}`}>
                    <FourthBook data={item} key={item.idx} />
                  </Link>
                </MapBox>
              ))}
            </FourthBody>
          </FourthBox>
          <FifthBox>
            <FifthLeftBox>
              <FifthTitle>코멘트 달 책 둘러보기</FifthTitle>
              <FifthText>
                평소 읽고 싶었던 책, 관심 있는 책을 살펴보고 내가 읽었던 책을
                찾아서 코멘트 달 수 있어요!
              </FifthText>
              <Link to={"/book/list"}>
                <FifthBtn>전체보기</FifthBtn>
              </Link>
            </FifthLeftBox>
            <FifthImg src="/bookList.png" />
          </FifthBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const ThirdBook = (props: any) => {
  return (
    <ThirdBookCard>
      <ThirdBookCardImg src={props.data.thumbnail} />
      <ThirdBookCardText>{props.data.title}</ThirdBookCardText>
    </ThirdBookCard>
  )
}
const ThirdBook2 = (props: any) => {
  return (
    <ThirdBookCard2>
      <ThirdBookCardImg2 src={props.data.thumbnail} />
      <ThirdBookCardText2>{props.data.title}</ThirdBookCardText2>
    </ThirdBookCard2>
  )
}
const ThirdBook3 = (props: any) => {
  return (
    <ThirdBookCard3>
      <ThirdBookCardImg3 src={props.data.thumbnail} />
      <ThirdBookCardText3>{props.data.title}</ThirdBookCardText3>
    </ThirdBookCard3>
  )
}

const FourthBook = (props: any) => {
  return (
    <FourthImgCard>
      <FourthImgCardLeft>
        <FourthImgCardImg src={props.data.thumbnail} />
      </FourthImgCardLeft>
      <FourthImgCardRight>
        <FourthImgCardTitle>{props.data.title}</FourthImgCardTitle>
        <FourthImgCardText>#재미있는</FourthImgCardText>
      </FourthImgCardRight>
    </FourthImgCard>
  )
}
