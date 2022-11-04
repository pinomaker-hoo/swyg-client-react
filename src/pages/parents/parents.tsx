import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../api"
import { getUserInfo, updateImg } from "../../api/auth"
import { getBookListCount } from "../../api/book"
import { getUserBookList } from "../../api/userBook"
import Header from "../../components/Header"

import {
  BodyBox,
  BookBox,
  BookImage,
  DateBox,
  DateColum,
  DateSubTitle,
  DateText,
  DateText2,
  DateTitle,
  FirstBox,
  FirstDiv,
  FourthBox,
  FourthTitle,
  HideInput,
  ImgBox,
  InBox,
  ListLi,
  ListText,
  ListUl,
  MapKeyBox,
  NameText,
  OuterBox,
  SecondBox,
  TagBtn,
  ThirdBox,
  ThirdTitle,
} from "./style"

export default function Parents() {
  const [user, setUser]: any = useState()
  const [bookList1, setBookList1] = useState([])
  const [bookList2, setBookList2] = useState([])
  const [dayCount, setDayCount]: any = useState([0, 0, 0, 0, 0, 0, 0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    callApi()
  }, [])

  const imgInput: any = useRef()

  const callApi = async () => {
    const { data: data1 }: any = await getBookListCount(4)
    setBookList1(() => data1)
    const { data: data2 }: any = await getBookListCount(4)
    setBookList2(() => data2)
    const { data } = await getUserInfo()
    setUser(() => data)
    const { data: data3 }: any = await getUserBookList()
    const today = new Date()
    today.setDate(today.getDate() - 7)
    const filterArr = data3.filter((item: any) => {
      const createdAt = new Date(item.createdAt)
      return createdAt > today
    })
    for (const item of filterArr) {
      const dateToDay = getDateToDay(item.createdAt)
      updateDayState(dateToDay)
    }
    setLoading(() => false)
  }

  const onClickImg = async () => {
    imgInput.current.click()
  }

  const onChangeImg = async (event: any) => {
    const formData = new FormData()
    formData.append("files", event.target.files[0])
    const { data }: any = await updateImg(formData)
    if (data) location.href = "/parents"
  }

  const getDateToDay = (data: any) => {
    const date = new Date(data)
    const WEEKDAY: number[] = [0, 1, 2, 3, 4, 5, 6]
    return WEEKDAY[date.getDay()]
  }

  const updateDayState = (data: number) => {
    dayCount[data]++
  }

  if (loading) return null
  console.log(dayCount)
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <FirstBox>
            <FirstDiv>
              {user.imgPath ? (
                <ImgBox
                  src={`${BASE_URL}/${user.imgPath}`}
                  onClick={onClickImg}
                />
              ) : (
                <ImgBox src="/user.png" onClick={onClickImg} />
              )}
              <HideInput
                type="file"
                accept="image/*"
                ref={imgInput}
                onChange={onChangeImg}
              />
            </FirstDiv>
            <FirstDiv>
              <NameText>{user.name}</NameText>
            </FirstDiv>
          </FirstBox>
          <SecondBox>
            <DateTitle>최근 독서 기록</DateTitle>
            <DateSubTitle>(단위/권)</DateSubTitle>
            <DateBox>
              <DateColum>
                <DateText>일</DateText>
                <DateText2>{dayCount[0]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>월</DateText>
                <DateText2>{dayCount[1]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>화</DateText>
                <DateText2>{dayCount[2]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>수</DateText>
                <DateText2>{dayCount[3]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>목</DateText>
                <DateText2>{dayCount[4]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>금</DateText>
                <DateText2>{dayCount[5]}</DateText2>
              </DateColum>
              <DateColum>
                <DateText>토</DateText>
                <DateText2>{dayCount[6]}</DateText2>
              </DateColum>
            </DateBox>
          </SecondBox>
          <ThirdBox>
            <ThirdTitle>이번 주 독서 평가</ThirdTitle>
            <ListUl>
              <ListLi>과학에 관심이 많고 과학책을 가장 많이 읽었어요.</ListLi>
              <ListLi>책을 읽고 다른 친구가 낸 퀴즈를 모두 맞추었어요.</ListLi>
              <ListLi>퀴즈를 내는 문장 어휘력이 조금 부족해 보여요.</ListLi>
              <ListLi>
                다른 친구의 코멘트에 긍정적인 댓글을 달고 소통했어요.
              </ListLi>
            </ListUl>
            <ListText>보호자 TIP!</ListText>
            <ListUl>
              <ListLi>
                과학이 다른 도서 분야와도 상관관계가 있다는 것을 알려주세요!
              </ListLi>
              <ListLi>
                아이가 과학에 흥미를 잃지 않도록 집에서 할 수 있는 과학 실험을
                보호자께서 지도해주세요!
              </ListLi>
            </ListUl>
          </ThirdBox>
          <FourthBox>
            <FourthTitle>평가 기반 추천 도서</FourthTitle>
            <TagBtn>#언어자극</TagBtn>
            <BookBox>
              {bookList1.map((item: any) => (
                <MapKeyBox key={item.idx}>
                  <Link to={`/book/${item.idx}`}>
                    <BookImage key={item.idx} src={item.thumbnail} />
                  </Link>
                </MapKeyBox>
              ))}
            </BookBox>
            <TagBtn>#어휘력 향상</TagBtn>
            <BookBox>
              {bookList2.map((item: any) => (
                <MapKeyBox key={item.idx}>
                  <Link to={`/book/${item.idx}`}>
                    <BookImage src={item.thumbnail} />
                  </Link>
                </MapKeyBox>
              ))}
            </BookBox>
          </FourthBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}
