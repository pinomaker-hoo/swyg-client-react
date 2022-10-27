import { useState } from "react"
import { KakaoSearch, SaveBook } from "../../api/book"
import Header from "../../components/Header"
import { BookTitle } from "../book/style"
import {
  BodyBox,
  FifthBox,
  FirstBox,
  FirstImg,
  FirstLeftBox,
  FirstRightBox,
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
  OuterBox,
  PText,
  SecondBox,
  SecondInput,
  SecondTagBtn,
  SecondTagBtnBox,
  SecondTitle,
  ThirdBookCard,
  ThirdBookCardBox,
  ThirdBookCardImg,
  ThirdBookCardText,
  ThirdBox,
  ThirdSubTitle,
} from "./styles"

export default function Home() {
  const [text, setText] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onClick = () => {
    callApi()
  }

  const callApi = async () => {
    const params = {
      query: text,
      size: 9,
      target: "title",
    }
    const { documents } = await (await KakaoSearch(params)).data
    console.log(documents)
    for (const item of documents) {
      console.log(item)
      const res = await SaveBook(item)
      console.log(res)
    }
  }

  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <FirstBox>
            <FirstLeftBox>
              <PText>00아 북도리를 만난 걸 환영해</PText>
              <FirstTitleText>바깥 세상이 궁금해!</FirstTitleText>
            </FirstLeftBox>
            <FirstRightBox>
              <FirstImg src="../../../public/egg.png" />
            </FirstRightBox>
          </FirstBox>
          <SecondBox>
            <SecondTitle>어떤 책을 찾고 있어?</SecondTitle>
            <SecondInput placeholder="ex. 안나의 일기" />
            <SecondTagBtnBox>
              <SecondTagBtn>#흥미진진한</SecondTagBtn>
              <SecondTagBtn>#모험적인</SecondTagBtn>
              <SecondTagBtn>#인기있는</SecondTagBtn>
              <SecondTagBtn>#스릴있는</SecondTagBtn>
              <SecondTagBtn>#신기한</SecondTagBtn>
            </SecondTagBtnBox>
          </SecondBox>
          <ThirdBox>
            <BookTitle>북도리 성장을 도와주는 책</BookTitle>
            <ThirdSubTitle>
              관심 있는 카테고리 책을 골라 <br />
              메이트 성장을 도울 수 있어요!
            </ThirdSubTitle>
            <ThirdBookCardBox>
              <ThirdBook />
              <ThirdBook />
              <ThirdBook />
              <ThirdBook />
              <ThirdBook />
            </ThirdBookCardBox>
          </ThirdBox>
          <FourthBox>
            <FourthTitle>친구들이 가장 많이 읽은 Top 6</FourthTitle>
            <FourthBody>
              <FourthBook />
              <FourthBook />
              <FourthBook />
              <FourthBook />
              <FourthBook />
              <FourthBook />
            </FourthBody>
          </FourthBox>
          <FifthBox></FifthBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}

const ThirdBook = (props: any) => {
  return (
    <ThirdBookCard>
      <ThirdBookCardImg />
      <ThirdBookCardText>비밀교실</ThirdBookCardText>
    </ThirdBookCard>
  )
}

const FourthBook = () => {
  return (
    <FourthImgCard>
      <FourthImgCardLeft>
        <FourthImgCardImg />
      </FourthImgCardLeft>
      <FourthImgCardRight>
        <FourthImgCardTitle>가짜 모범생</FourthImgCardTitle>
        <FourthImgCardText>#재미있는</FourthImgCardText>
      </FourthImgCardRight>
    </FourthImgCard>
  )
}
