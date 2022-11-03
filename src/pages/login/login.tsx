import React, { useState } from "react"
import { login } from "../../api/auth"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../api"
import {
  OuterBox,
  InBox,
  InputBox,
  LoginBtn,
  Logo,
  LabelText,
  OtherTextTwo,
  KakaoBtn,
} from "./style"
import { useNull } from "../../common/Hooks"
import { setCookie } from "../../common/Cookie"

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
      const { data }: any = await login(user)
      if (!data) return alert("ERROR")
      console.log(data.token)
      await setCookie("accesstoken", data.token)
      localStorage.setItem("info", JSON.stringify(data.user))
      return navigate("/home")
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
        {/* <OtherTextOne>아이디/비밀번호 찾기</OtherTextOne> */}
        {/* <a href="http://210.90.136.10:8003/auth/naver">
          <NaverBtn>네이버 로그인</NaverBtn>
        </a> */}
        <a href={`${BASE_URL}/auth/kakao`}>
          <KakaoBtn>카카오계정 로그인</KakaoBtn>
        </a>
        <Link to={"/auth/register"}>
          <OtherTextTwo>
            matebook이 처음이라면? &nbsp; &nbsp; &nbsp; &nbsp; 회원가입
          </OtherTextTwo>
        </Link>
      </InBox>
    </OuterBox>
  )
}
