import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getPoint, savePoint } from "../../api/point"
import { saveUserBook } from "../../api/userBook"
import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function QuizTrue(props: any) {
  const [point, setPoint]: any = useState()

  const navigate = useNavigate()
  const { id }: any = useParams()
  let { state } = useLocation()

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const { data }: any = await getPoint()
    setPoint(data)
  }

  const onClick = async () => {
    const { data }: any = await savePoint(15)
    const { data: data2 }: any = await saveUserBook(id)
    if (!data || !data2) return alert("ERROR")
    if (point < 50 && point + 50 >= 50) return navigate("/level")
    navigate(`/book/${state}`)
  }

  return (
    <OuterBox>
      <InBox>
        <Title>축하해 15p를 획득했어!</Title>
        <Img src="/point15.png" />
        <br />
        <SubBtn onClick={onClick}>확인하기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
