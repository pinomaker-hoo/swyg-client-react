import React, { useState } from "react"
import { register, sendMail } from "../../api/auth"
import { useNavigate } from "react-router-dom"
import {
  OuterBox,
  InBox,
  InputName,
  InputOther,
  InputEmail,
  Logo,
  LabelText,
  RegisterBtn,
  CodeBtn,
  MaleBtn,
  LabelTextMale,
  LineBox,
  InLineBox,
  InLineBoxBtn,
  YearsSelect,
  MonthsSelect,
  DaysSelect,
} from "./style"
import { useNull, useSame } from "../../common/hooks/inputHooks"

export default function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "", name: "" })
  const [serverCode, setServerCode] = useState(0)
  const [inputCode, setInputCode] = useState(0)
  const [passwordC, setPasswordC] = useState("")
  const [form, setForm] = useState({
    year: 2022,
    month: "01",
    day: "01",
  })
  const [male, setMale] = useState(true)

  const now = new Date()

  let years = []
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y)
  }

  let month = []
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      month.push("0" + m.toString())
    } else {
      month.push(m.toString())
    }
  }
  let days: any[] = []
  let date = new Date(form.year, Number(form.month), 0).getDate()
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      days.push("0" + d.toString())
    } else {
      days.push(d.toString())
    }
  }

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
      ;`${form.year}-${form.month}-${form.day}`

      if (!useNull([user.email, user.name, user.password, inputCode]))
        return alert("Null ERROR")
      if (!useSame(user.password, passwordC))
        return alert("비밀번호와 비밀번호 확인이 같지 않습니다.")
      onCheckCode()
      const response = await register(
        user,
        `${form.year}-${form.month}-${form.day}`,
        male
      )
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
        <LineBox>
          <InLineBox>
            <label>
              <LabelText>이름</LabelText>
              <InputName onChange={onChange} type="text" name="name" />
            </label>
          </InLineBox>
          <InLineBox>
            <LabelTextMale>성별</LabelTextMale>
            <MaleBtn
              color={male ? "#F18B45" : "#442d7a"}
              onClick={() => setMale(() => true)}
            >
              남자
            </MaleBtn>
            <MaleBtn
              color={male ? "#442d7a" : "#F18B45"}
              onClick={() => setMale(() => false)}
            >
              여자
            </MaleBtn>
          </InLineBox>
        </LineBox>
        <label>
          <LabelText>생년월일</LabelText>
          <YearsSelect
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          >
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </YearsSelect>
          <MonthsSelect
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          >
            {month.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </MonthsSelect>
          <DaysSelect
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          >
            {days.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </DaysSelect>
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
        <InLineBoxBtn>
          <RegisterBtn onClick={onRegister}>회원가입</RegisterBtn>
        </InLineBoxBtn>
      </InBox>
    </OuterBox>
  )
}
