import { useState } from "react"

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
