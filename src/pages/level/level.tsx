import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function Level() {
  // const navigate = useNavigate()

  return (
    <OuterBox>
      <InBox>
        <Title>진화 했어!</Title>
        <Img src="/eggLogo.png" />
        <br />
        <Link to={"/home"}>
          <SubBtn>확인하기.</SubBtn>
        </Link>
      </InBox>
    </OuterBox>
  )
}
