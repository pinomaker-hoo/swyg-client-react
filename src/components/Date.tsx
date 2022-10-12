import { useState } from "react"
import styled from "styled-components"

export default function DateSelect() {
  const [form, setForm] = useState({
    year: 2022,
    month: "01",
    day: "01",
  })

  const dateNumber = `${form.year}-${form.month}-${form.day}`

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

  return (
    <div>
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
    </div>
  )
}

const YearsSelect = styled.select`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  border: none;
  border-radius: 8px;
`
const MonthsSelect = styled.select`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-left: 56px;
`
const DaysSelect = styled.select`
  background-color: #442d7a;
  width: 104px;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-left: 56px;
`
