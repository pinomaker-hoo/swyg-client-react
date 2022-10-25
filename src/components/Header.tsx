import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  return (
    <OuterBox>
      <Link to={"/"}>
        <Logo>matebook</Logo>
      </Link>
      <Link to={"/likebook"}>
        <MenuText>찜</MenuText>
      </Link>
      <MenuText>로그아웃</MenuText>
      <MenuText>보호자</MenuText>
    </OuterBox>
  )
}

const OuterBox = styled.div`
  display: flex;
  width: 1100px;
  height: 100px;
`
export const Logo = styled.h1`
  font-family: SB_Aggro_B;
  color: white;
  margin-right: 550px;
`
export const MenuText = styled.h3`
  font-family: SB_Aggro_B;
  color: white;
  width: 100px;
  margin-left: 30px;
`
