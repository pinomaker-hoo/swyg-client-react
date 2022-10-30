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
    navigate("/")
  }

  return (
    <OuterBox>
      <Link to={"/home"}>
        <LogoImg src="/logo.png" />
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
        <Link to={"/"}>
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
const Logo = styled.h1`
  font-family: Aggro-B;
  color: white;
  float: left;
  font-size: 40px;
  margin-right: 400px;
  margin-left: 10px;
`

const LogoImg = styled.img`
  float: left;
  width: 43px;
  height: 35.85;
  margin-top: 24px;
  margin-right: 12px;
  margin-left: 100px;
`
const MenuText = styled.h3`
  font-family: Aggro-L;
  color: white;
  font-size: 18px;
  margin-left: 60px;
  margin-top: 40px;
  float: left;
`
