import React, { useState } from "react"
import { login } from "../../api/auth"
import { Link, useNavigate } from "react-router-dom"
import {
  OuterBox,
  InBox,
  InputBox,
  LoginBtn,
  Logo,
  LabelText,
  OtherTextOne,
  OtherTextTwo,
  KakaoBtn,
  NaverBtn,
} from "./style"
import { useNull } from "../../common/Hooks"

export default function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({ email: "", password: "" })

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onLogin = async () => {
    try {
      if (!useNull([user.email, user.password])) return alert("Null ERROR")
      const { data } = await login(user)
      localStorage.setItem("info", JSON.stringify(data.user))
      if (data) return navigate("/home")
      return alert("ERROR")
    } catch (err) {
      console.log(err)
      alert("ERROR")
    }
  }

  return (
    <OuterBox>
      <InBox>
        <Logo>matebook</Logo>
        <label>
          <LabelText>아이디</LabelText>
          <InputBox onChange={onChange} type="text" name="email" />
        </label>
        <label>
          <LabelText>비밀번호</LabelText>
          <InputBox onChange={onChange} type="password" name="password" />
        </label>
        <LoginBtn onClick={onLogin}>로그인</LoginBtn>
        <OtherTextOne>아이디/비밀번호 찾기</OtherTextOne>
        <a href="http://localhost:8003/auth/naver">
          <NaverBtn>네이버 로그인</NaverBtn>
        </a>
        <a href="http://localhost:8003/auth/kakao">
          <KakaoBtn>카카오계정 로그인</KakaoBtn>
        </a>
        <Link to={"/auth/register"}>
          <OtherTextTwo>matebook이 처음이라면? 회원가입</OtherTextTwo>
        </Link>
      </InBox>
    </OuterBox>
  )
}
