import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { removeCookie } from "../common/Cookie"
import { getJwtCookie, useLogined } from "../common/Hooks"

export default function Header() {
  const [logined, setLogined] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    checkLogined()
  }, [])

  const checkLogined = async () => {
    const cookie = await getJwtCookie()
    cookie ? setLogined(() => true) : setLogined(() => false)
  }

  const logoutBtn = async () => {
    removeCookie("accessToken")
    navigate("/")
  }

  const onClickNotLogined = async () => {
    const logined = await useLogined()
    if (!logined) return
    alert("로그인이 필요합니다.")
    navigate("/auth/login")
  }

  return (
    <OuterBox>
      <Link to={"/"}>
        <Logo>matebook</Logo>
      </Link>
      {logined ? (
        <Link to={"/likebook"}>
          <MenuText>찜</MenuText>
        </Link>
      ) : (
        <MenuText onClick={onClickNotLogined}>찜</MenuText>
      )}
      {logined ? (
        <MenuText onClick={logoutBtn}>로그아웃</MenuText>
      ) : (
        <Link to={"/auth/login"}>
          <MenuText>로그인</MenuText>
        </Link>
      )}
      {logined ? (
        <Link to={"/parents"}>
          <MenuText>보호자</MenuText>
        </Link>
      ) : (
        <MenuText onClick={onClickNotLogined}>보호자</MenuText>
      )}
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
