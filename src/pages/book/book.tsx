import { useParams } from "react-router-dom"
import { InBox, OuterBox } from "./style"

export default function Book() {
  const { id } = useParams()
  console.log(id)
  return (
    <OuterBox>
      <InBox></InBox>
    </OuterBox>
  )
}
