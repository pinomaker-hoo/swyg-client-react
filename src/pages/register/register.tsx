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
  LabelTextMale,
  LineBox,
  InLineBox,
  InLineBoxBtn,
  YearsSelect,
  MonthsSelect,
  DaysSelect,
  MaleSelect,
} from "./style"
import { useNull, useSame } from "../../common/Hooks"
import { setCookie } from "../../common/Cookie"

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "", name: "" })
  const [serverCode, setServerCode] = useState(0)
  const [inputCode, setInputCode] = useState(0)
  const [passwordC, setPasswordC] = useState("")
  const [form, setForm] = useState({
    year: "2022",
    month: "01",
    day: "01",
  })
  const [male, setMale]: any = useState("male")

  const navigate = useNavigate()
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
  let date = new Date(Number(form.year), Number(form.month), 0).getDate()
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
      if (!useNull([user.email, user.name, user.password]))
        return alert("Null ERROR")
      if (!useSame(user.password, passwordC))
        return alert("??????????????? ???????????? ????????? ?????? ????????????.")
      onCheckCode()
      let maleData: boolean
      male === "male" ? (maleData = true) : (maleData = false)
      const {data} = await register(user, `${form.year}-${form.month}-${form.day}`, maleData)
      await setCookie("accesstoken", data.token)
      localStorage.setItem("info", JSON.stringify(data.user))
      if (data) navigate("/auth/info")
    } catch (err) {
      console.log(2, err)
      alert("ERROR")
    }
  }

  const onSendCode = async () => {
    try {
      const response = await sendMail(user.email)
      setServerCode(() => response.data)
      alert("????????? ?????????????????????.")
    } catch (err) {
      alert("ERROR")
    }
  }

  const onCheckCode = () => {
    if (serverCode !== inputCode) return alert("?????? ????????????.")
  }

  return (
    <OuterBox>
      <InBox>
        <Logo>matebook</Logo>
        <LineBox>
          <InLineBox>
            <label>
              <LabelText>??????</LabelText>
              <InputName onChange={onChange} type="text" name="name" />
            </label>
          </InLineBox>
          <InLineBox>
            <LabelTextMale>??????</LabelTextMale>
            <MaleSelect
              value={male}
              onChange={(e) => setMale(() => e.target.value)}
            >
              <option value="male">??????</option>
              <option value="female">??????</option>
            </MaleSelect>
          </InLineBox>
        </LineBox>
        <label>
          <LabelText>????????????</LabelText>
          <YearsSelect
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          >
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </YearsSelect>
          <MonthsSelect
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
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
          <LabelText>?????????</LabelText>
          <InputEmail onChange={onChange} type="text" name="email" />
        </label>
        <CodeBtn onClick={onSendCode}>?????? ??????</CodeBtn>
        <label>
          <LabelText>?????? ??????</LabelText>
          <InputEmail onChange={onChangeCode} type="text" />
        </label>
        <label>
          <LabelText>????????????</LabelText>
          <InputOther onChange={onChange} type="password" name="password" />
        </label>
        <label>
          <LabelText>???????????? ??????</LabelText>
          <InputOther onChange={onChangePwc} type="password" />
        </label>
        <InLineBoxBtn>
          <RegisterBtn onClick={onRegister}>????????????</RegisterBtn>
        </InLineBoxBtn>
      </InBox>
    </OuterBox>
  )
}
