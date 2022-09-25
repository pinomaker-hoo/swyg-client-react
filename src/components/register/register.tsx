import React, { useState } from 'react'
import { register, sendMail } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
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
} from './style'

export default function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '', name: '' })
  const [serverCode, setServerCode] = useState(0)
  const [inputCode, setInputCode] = useState(0)

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onRegister = async () => {
    try {
      const response = await register(user)
      navigate('/')
    } catch (err) {
      alert('ERROR')
    }
  }

  const onSendCode = async () => {
    try {
      const response = await sendMail(user.email)
      setServerCode(() => response.data)
      alert('코드를 전송하였습니다.')
    } catch (err) {
      alert('ERROR')
    }
  }

  const onCheckCode = async () => {
    if (serverCode === inputCode) return true
    return alert('같지 않습니다.')
  }

  const onCheckPassword = async () => {}

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
          <InputEmail onChange={onChange} type="text" name="email" />
        </label>
        <label>
          <LabelText>비밀번호</LabelText>
          <InputOther onChange={onChange} type="password" name="password" />
        </label>
        <label>
          <LabelText>비밀번호 확인</LabelText>
          <InputOther onChange={onChange} type="password" name="password" />
        </label>
        <RegisterBtn onClick={onRegister}>회원가입</RegisterBtn>
      </InBox>
    </OuterBox>
  )
}
