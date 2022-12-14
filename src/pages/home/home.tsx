import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getBookListCount } from "../../api/book"
import { getMate } from "../../api/mate"
import { setCookie } from "../../common/Cookie"
import { getParams } from "../../common/Hooks"
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
  FirstStateText1,
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
  const [bookList, setBookList]: any = useState([])
  const [loading, setLoading] = useState(true)
  const [mate, setMate]: any = useState()
  const [point, setPoint]: any = useState()

  const navigate = useNavigate()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const token = await getParams()
    if (token) await setCookie("accesstoken", token)
    const { data: bookData }: any = await getBookListCount(15)
    const { data: mateData }: any = await getMate()
    setBookList(() => bookData)
    setMate(() => mateData.mate)
    setPoint(() => mateData.point)
    setLoading(() => false)
  }

  const onClickBook = async (event: any) => {
    if (event.key === "Enter") {
      navigate("/book/search", { state: event.target.value })
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
                {mate.user.name}??? {mate.name}??? ?????? ??? ?????????
              </PText>
              <FirstTitleText>?????? ????????? ?????????!</FirstTitleText>
              <FirstInfoBox>
                <FirstIcon src="/level.png" />
                <FirstIconText>Lv1.</FirstIconText>
                <FirstIcon src="/homestar.png" />
                <FirstIconText>{point}p</FirstIconText>
                <FirstIcon src="/comment.png" />
                <FirstIconText>?????????</FirstIconText>
                <FirstIcon src="/quiz.png" />
                <FirstIconText>??????</FirstIconText>
              </FirstInfoBox>
              <FirstStateBox>
                <FirstStateLine>
                  <FirstStateText>??????</FirstStateText>
                  <FirstStateText1>?????????</FirstStateText1>
                  <FirstStateBar></FirstStateBar>
                  <FirstStateText1>100%</FirstStateText1>
                </FirstStateLine>
                <FirstStateLine>
                  <FirstStateText>??????</FirstStateText>
                  <FirstStateText1>???</FirstStateText1>
                  <FirstStateText1>0%</FirstStateText1>
                </FirstStateLine>
                <FirstStateLine>
                  <FirstStateText>??????</FirstStateText>
                  <FirstStateText1>???</FirstStateText1>
                  <FirstStateText1>0%</FirstStateText1>
                </FirstStateLine>
              </FirstStateBox>
            </FirstLeftBox>
            <FirstRightBox>
              {point >= 50 ? (
                <FirstImg src="/duck.png" />
              ) : (
                <FirstImg src="/egg.png" />
              )}
            </FirstRightBox>
          </FirstBox>
          <SecondBox>
            <SecondTitle>?????? ?????? ?????? ???????</SecondTitle>
            <SecondInputBox>
              <SecondInput
                placeholder="ex. ????????? ??????"
                onKeyPress={onClickBook}
              />
            </SecondInputBox>
            <SecondTagBtnBox>
              <SecondTagBtn1># ???????????????</SecondTagBtn1>
              <SecondTagBtn># ????????????</SecondTagBtn>
              <SecondTagBtn># ????????????</SecondTagBtn>
              <SecondTagBtn># ????????????</SecondTagBtn>
              <SecondTagBtn># ?????????</SecondTagBtn>
            </SecondTagBtnBox>
          </SecondBox>
          <ThirdBox>
            <ThirdTitle>????????? ????????? ???????????? ???</ThirdTitle>
            <ThirdSubTitle>
              ?????? ?????? ???????????? ?????? ?????? <br />
              ????????? ????????? ?????? ??? ?????????!
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
                <ThirdBook2 data={bookList[4]} />
              </Link>
            </ThirdBookCardBox>
          </ThirdBox>
          <FourthBox>
            <FourthTitle>???????????? ?????? ?????? ?????? Top 6</FourthTitle>
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
              <FifthTitle>????????? ??? ??? ????????????</FifthTitle>
              <FifthText>
                ?????? ?????? ????????? ???, ?????? ?????? ?????? ???????????? ?????? ????????? ??????
                ????????? ????????? ??? ??? ?????????!
              </FifthText>
              <Link to={"/book/list"}>
                <FifthBtn>????????????</FifthBtn>
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
        {props.data.title.length > 16 ? (
          <FourthImgCardTitle>
            {props.data.title.substr(0, 16)} ...
          </FourthImgCardTitle>
        ) : (
          <FourthImgCardTitle>{props.data.title}</FourthImgCardTitle>
        )}

        <FourthImgCardText>#????????????</FourthImgCardText>
      </FourthImgCardRight>
    </FourthImgCard>
  )
}
