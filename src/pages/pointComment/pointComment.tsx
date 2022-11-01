import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPoint, savePoint } from "../../api/point"
import { saveUserBook } from "../../api/userBook"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function PointComment() {
  const [point, setPoint]: any = useState()

  const navigate = useNavigate()
  const { id }: any = useParams()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data }: any = await getPoint()
    setPoint(data)
  }

  const onClick = async () => {
    const { data }: any = await savePoint(50)
    const { data: data2 }: any = await saveUserBook(id)
    if (!data || !data2) return alert("ERROR")
    if (point < 50 && point + 50 >= 50) return navigate("/level")
    navigate(`/book/${id}`)
  }

  return (
    <OuterBox>
      <InBox>
        <Title>50p를 획득했어!</Title>
        <Img src="/eggLogo.png" />
        <br />
        <SubBtn onClick={onClick}>포인트 받기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
