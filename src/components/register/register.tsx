import React, { useState } from 'react'
import { register } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <div>
        <h1>matebook</h1>
        <label>
          <h3>이름</h3>
          <input onChange={onChange} type="text" name="name" />
        </label>
        <label>
          <h3>이메일</h3>
          <input onChange={onChange} type="text" name="email" />
        </label>
        <label>
          <h3>비밀번호</h3>
          <input onChange={onChange} type="password" name="password" />
        </label>
        <button onClick={onRegister}>회원가입</button>
      </div>
    </div>
  )
}
