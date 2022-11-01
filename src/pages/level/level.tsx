import { Img, InBox, OuterBox, SubBtn, Title } from "./style"

export default function Level() {
  return (
    <OuterBox>
      <InBox>
        <Title>50p를 획득했어!</Title>
        <Img src="/eggLogo.png" />
        <br />
        <SubBtn>포인트 받기</SubBtn>
      </InBox>
    </OuterBox>
  )
}
