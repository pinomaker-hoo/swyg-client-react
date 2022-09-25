import React, { useState } from 'react'
import { register } from '../../api/auth'
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
        <CodeBtn>코드 전송</CodeBtn>
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
