import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
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
  DateText,
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
  const [readBookList, setReadBookList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    callApi()
  }, [])

  const imgInput: any = useRef()

  const callApi = async () => {
    const { data: data1 } = await getBookListCount(4)
    setBookList1(() => data1)
    const { data: data2 } = await getBookListCount(4)
    setBookList2(() => data2)
    const { data } = await getUserInfo()
    setUser(() => data)
    const { data: data3 }: any = await getUserBookList()
    setReadBookList(() => data3)
    setLoading(() => false)
  }

  const onClickImg = async () => {
    imgInput.current.click()
  }

  const onChangeImg = async (event: any) => {
    const formData = new FormData()
    formData.append("files", event.target.files[0])
    const { data }: any = await updateImg(formData)
  }

  if (loading) return null
  return (
    <OuterBox>
      <InBox>
        <Header />
        <BodyBox>
          <FirstBox>
            <FirstDiv>
              <ImgBox
                src={`http://localhost:8003/${user.imgPath}`}
                onClick={onClickImg}
              />
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
            <DateBox>
              <DateColum>
                <DateText>일</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>월</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>화</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>수</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>목</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>금</DateText>
                <DateText>0</DateText>
              </DateColum>
              <DateColum>
                <DateText>토</DateText>
                <DateText>0</DateText>
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
                <Link to={`/book/${item.idx}`}>
                  <BookImage key={item.idx} src={item.thumbnail} />
                </Link>
              ))}
            </BookBox>
            <TagBtn>#어휘력 향상</TagBtn>
            <BookBox>
              {bookList2.map((item: any) => (
                <Link to={`/book/${item.idx}`}>
                  <BookImage key={item.idx} src={item.thumbnail} />
                </Link>
              ))}
            </BookBox>
          </FourthBox>
        </BodyBox>
      </InBox>
    </OuterBox>
  )
}
