import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Img, ImgBox, InBox, OuterBox, SubBtn, Title } from "./style"

export default function Level() {
  const [changed, setChanged] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setChanged(false)
    }, 2000)
  }, [])

  return (
    <OuterBox>
      <InBox>
        <Title>진화 했어!</Title>
        <ImgBox>
          {changed ? <Img src="/eggLogo.png" /> : <Img src="/duckLogo.png" />}
        </ImgBox>
        <br />
        <Link to={"/home"}>
          <SubBtn>확인하기.</SubBtn>
        </Link>
      </InBox>
    </OuterBox>
  )
}
