import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Img, InBox, OuterBox, Title } from "./style"

export default function CheckQuiz() {
  const navigate = useNavigate()

  useEffect(() => {
    checkPage()
  }, [])

  const checkPage = () => {
    setTimeout(() => {
      navigate("/quiz/point")
    }, 2000)
  }

  return (
    <OuterBox>
      <InBox>
        <Title>퀴즈를 검토중이야!</Title>
        <Img src="/checkLogo.png" />
      </InBox>
    </OuterBox>
  )
}
