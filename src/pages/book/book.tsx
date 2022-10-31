import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { BASE_URL_SERVER } from "../../api"
import { getUserInfo } from "../../api/auth"
import { getBook } from "../../api/book"
import { saveLikeBook } from "../../api/likeBook"
import { getReview, getReviewList, saveReview } from "../../api/review"
import {
  deleteReviewLike,
  getReviewLikeList,
  saveReviewLike,
} from "../../api/reviewLike"
import { useLogined } from "../../common/Hooks"
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
  const [user, setUser]: any = useState()
  const [reviewList, setReviewList]: any = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    callApi()
  }, [])

  const { id }: any = useParams()

  const callApi = async () => {
    if (id) {
      const { data } = await getBook(id)
      setBook(() => data)
    }
    const { data }: any = await getUserInfo()
    setUser(() => data)
    const { data: reviewData }: any = await getReviewList(id)
    setReviewList(() => reviewData)
    setLoading(() => false)
  }

  const onChangeText = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onClickBtn = async () => {
    const logined = await useLogined()
    if (logined) {
      await saveReview(text, id)
      navigate(`/book/comment/${id}`)
    } else {
      alert("로그인이 필요합니다.")
      navigate("/")
    }
  }

  const onClickLikeBookBtn = async () => {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인이 필요합니다.")
      navigate("/")
    } else {
      const { data } = await saveLikeBook(id)
      data ? alert("찜하였습니다.") : alert("ERROR")
    }
  }

  const onClickQuiz = async () => {
    const logined = await useLogined()
    if (logined) return navigate(`/quiz/${id}`)
    alert("로그인이 필요합니다.")
    navigate("/")
  }

  const onClickMakeQuiz = async () => {
    const logined = await useLogined()
    if (logined) return navigate(`/quiz/make/choice/${id}`)
    alert("로그인이 필요합니다.")
    navigate("/")
  }

  if (!book || loading) return null
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
                  <BookStory>{book.contents.substr(0, 110)}</BookStory>
                  <BookBtn onClick={onClickQuiz} color="#F18B45">
                    퀴즈 맞추기
                  </BookBtn>
                  <BookBtn onClick={onClickMakeQuiz} color="#805FC7">
                    퀴즈 내기
                  </BookBtn>
                </BookTextBox>
              </BookRightBox>
            </BookBox>
          </TopBox>
          <BottomBox>
            {reviewList
              .filter((item: any) => item.user.idx === user.idx)
              .map((item: any) => (
                <Comment key={item.idx} data={item} />
              ))}
            <BottomTitle>친구들이 단 코멘트 </BottomTitle>
            {reviewList
              .filter((item: any) => item.user.idx !== user.idx)
              .map((item: any) => (
                <Comment key={item.idx} data={item} />
              ))}
            <CommentBox>
              <CommentLeft>
                {user.imgPath ? (
                  <ImageBox src={`${BASE_URL_SERVER}/${user.imgPath}`} />
                ) : (
                  <ImageBox src="/user.png" />
                )}
              </CommentLeft>
              <CommentRight>
                <CommentName>{user.name}</CommentName>
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
  const [likeList, setLikeList]: any = useState([])
  const [loading, setLoading] = useState(true)

  const { data } = props
  const navigate = useNavigate()

  useEffect(() => {
    callApi().then(() => setLoading(false))
  }, [likeList])

  const callApi = async () => {
    const { data: reviewLikeData }: any = await getReviewLikeList(data.idx)
    setLikeList(() => reviewLikeData)
  }

  const onClickReviewLike = async () => {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인이 필요합니다.")
      return navigate("/")
    }
    const { data: likeData }: any = await saveReviewLike(data.idx)
    likeData ? alert("좋아요를 눌렀습니다.") : alert("좋아요를 취소했습니다.")
    console.log(likeData)
  }

  if (loading) return null
  return (
    <CommentBox>
      <CommentLeft>
        {data.user.imgPath ? (
          <ImageBox src={`${BASE_URL_SERVER}/${data.user.imgPath}`} />
        ) : (
          <ImageBox src="/user.png" />
        )}
      </CommentLeft>
      <CommentRight>
        <CommentName>{data.user.name}</CommentName>
        <CommentText>{data.text}</CommentText>
        <CommentIcon onClick={onClickReviewLike} src="/icon-like.png" />
        <CommentInfo color="#f18b45">{likeList.length}</CommentInfo>
        {/* <CommentIcon src="../../../public/icon-comment.png" />
        <CommentInfo>10</CommentInfo> */}
      </CommentRight>
    </CommentBox>
  )
}
