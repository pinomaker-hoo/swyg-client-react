import React, { useState } from 'react'
import { login } from '../../api/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({ email: '', password: '' })

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onLogin = async () => {
    try {
      const response = await login(user)
      goToMainPage()
    } catch (err) {
      alert('ERROR')
    }
  }

  const goToMainPage = () => {
    navigate('/')
  }

  return (
    <div>
      <div>
        <h1>matebook</h1>
        <label>
          <h3>아이디</h3>
          <input />
        </label>
        <label>
          <h3>아이디</h3>
          <input />
        </label>
        <button>로그인</button>
        <p>아이디/비밀번호 찾기</p>
        <button>네이버로 로그인</button>
        <button>카카오계정 로그인</button>
        <p>matebook이 처음이라면? 회원가입</p>
      </div>
    </div>
  )
}
