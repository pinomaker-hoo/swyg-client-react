import { useNavigate, useParams } from "react-router-dom"
import { savePoint } from "../../api/point"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function PointQuiz() {
  const navigate = useNavigate()
  const { id }: any = useParams()

  const onClick = async () => {
    const { data }: any = await savePoint(5)
    if (!data) return alert("ERROR")
    navigate(`/book/${id}`)
  }

  return (
    <OuterBox>
      <InBox>
        <Title>축하해 15p를 획득했어!</Title>
        <Img src="/point50.png" />
        <br />
        <SubBtn onClick={onClick}>포인트 받기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
