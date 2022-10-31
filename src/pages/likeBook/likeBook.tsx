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
  BookStory1,
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
          {bookList.length > 0 ? (
            bookList.map((item: any) => (
              <Book data={item.book} key={item.idx} />
            ))
          ) : (
            <BookBox>
              <BookStory1>
                {"초의 소설(Novel) 작품으로 11세기 초 헤이안시대의 궁녀였던 무라사키 시키부가 쓴 장편소설인 겐지모노가타리를 꼽기도 한다. 다만 여기에는 상당한 논쟁의 여지가 있다. 겐지모노가타리 이전에 이미 세계 각지에 다수의 소설(Fiction, 가상의 이야기로서의 소설) 전통이 존재하기 때문이며[6], 그렇다고 근대적 의미의 소설(Novel, 장르로서의 소설)의 시초로 겐지모노가타리를 꼽기에는 직간접적 조상인 것도 아닐 뿐 아니라 근대소설이 요구하는 내용적 측면[7]도 충분히 만족하지 못하기 때문이다. 겐지모노가타리가 최초의 소설이라는 주장은, 근대적 산문 문학(Novel)의 요건을 충족했느냐로 따진 기준으로서, 그 중에서도 특히 내면의 심리묘사라는 부분적 측면과 관련이 있다. 즉, 겐지모노가타리는 단순히 등장인물들의 행위만을 서술한 것이 아니라 내면의 심리 묘사와 발전에 상당 부분을 할애했다는 점에서 최초의 소설로서 소급적으로 주장되는 것이다. 근대적 소설(Novel)의 특징 중 하나가 과거의 산문 문학과 비교할 때 등장인물들의 심리와 동기를 써내려가는 경향이 있기 때문이다. 현재도 대다수의 소설들은 캐릭터들의 내면과 행위 모두를 골고루 묘사하는 것이 당연시 되어 있다.".substr(
                  0,
                  120
                )}
                . . .
              </BookStory1>
            </BookBox>
          )}
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
        <BookStory>{data.contents.substr(0, 120)} . . .</BookStory>
        <Link to={`/book/${data.idx}`}>
          <BookBtn>미리보기</BookBtn>
        </Link>
      </MiddleBox>
      <RightBox></RightBox>
    </BookBox>
  )
}
