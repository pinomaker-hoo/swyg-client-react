import React, { useState } from "react"
import { register, sendMail } from "../../api/auth"
import { useNavigate } from "react-router-dom"
import {
  OuterBox,
  InBox,
  InputName,
  InputBirth,
  InputOther,
  InputEmail,
  Logo,
  LabelText,
  RegisterBtn,
  CodeBtn,
} from "./style"
import { useNull, useSame } from "../../common/hooks/inputHooks"

export default function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "", name: "" })
  const [serverCode, setServerCode] = useState(0)
  const [inputCode, setInputCode] = useState(0)
  const [passwordC, setPasswordC] = useState("")

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onChangePwc = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordC(() => event.target.value)
  }

  const onChangeCode = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(() => Number(event.target.value))
  }

  const onRegister = async () => {
    try {
      console.log(user.email, user.name, user.password, inputCode)
      if (!useNull([user.email, user.name, user.password, inputCode]))
        return alert("Null ERROR")
      if (!useSame(user.password, passwordC))
        return alert("비밀번호와 비밀번호 확인이 같지 않습니다.")
      onCheckCode()
      const response = await register(user)
      navigate("/")
    } catch (err) {
      alert("ERROR")
    }
  }

  const onSendCode = async () => {
    try {
      const response = await sendMail(user.email)
      setServerCode(() => response.data)
      alert("코드를 전송하였습니다.")
    } catch (err) {
      alert("ERROR")
    }
  }

  const onCheckCode = async () => {
    if (serverCode !== inputCode) return alert("같지 않습니다.")
  }

  return (
    <OuterBox>
      <InBox>
        <Logo>matebook</Logo>
        <label>
          <LabelText>이름</LabelText>
          <InputName onChange={onChange} type="text" name="name" />
        </label>
        <label>
          <LabelText>생년월일</LabelText>
          <InputBirth onChange={onChange} type="text" name="name" />
        </label>
        <label>
          <LabelText>이메일</LabelText>
          <InputEmail onChange={onChange} type="text" name="email" />
        </label>
        <CodeBtn onClick={onSendCode}>코드 전송</CodeBtn>
        <label>
          <LabelText>인증 코드</LabelText>
          <InputEmail onChange={onChangeCode} type="text" />
        </label>
        <label>
          <LabelText>비밀번호</LabelText>
          <InputOther onChange={onChange} type="password" name="password" />
        </label>
        <label>
          <LabelText>비밀번호 확인</LabelText>
          <InputOther onChange={onChangePwc} type="password" />
        </label>
        <RegisterBtn onClick={onRegister}>회원가입</RegisterBtn>
      </InBox>
    </OuterBox>
  )
}
