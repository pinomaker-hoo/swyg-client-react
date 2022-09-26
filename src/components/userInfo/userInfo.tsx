import { InBox, InputBox, LabelText, LogoText, OuterBox } from "./styles"

export default function UserInfo() {
  return (
    <OuterBox>
      <InBox>
        <LogoText>matebook</LogoText>
        <label>
          <LabelText>메이트 닉네임</LabelText>
          <InputBox />
        </label>
        <label>
          <LabelText>최근에 읽은 책</LabelText>
          <InputBox />
        </label>
      </InBox>
    </OuterBox>
  )
}
