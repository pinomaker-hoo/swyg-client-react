import { useNavigate } from "react-router-dom"
import { savePoint } from "../../api/point"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function QuizTrue() {
  const navigate = useNavigate()

  const onClick = async () => {
    const { data }: any = await savePoint(5)
    if (!data) return alert("ERROR")
    navigate("/home")
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
