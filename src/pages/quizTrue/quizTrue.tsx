import { useNavigate, useParams } from "react-router-dom"
import { savePoint } from "../../api/point"
import { saveUserBook } from "../../api/userBook"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function QuizTrue() {
  const navigate = useNavigate()
  const { id }: any = useParams()

  const onClick = async () => {
    const { data }: any = await savePoint(5)
    const { data: data2 }: any = await saveUserBook(id)
    if (!data || !data2) return alert("ERROR")
    navigate(`/book/${id}`)
  }

  return (
    <OuterBox>
      <InBox>
        <Title>축하해 15p를 획득했어!</Title>
        <Img src="/Earth.png" />
        <br />
        <SubBtn onClick={onClick}>확인하기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
