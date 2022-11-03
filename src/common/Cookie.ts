import { Cookies } from "react-cookie"

const cookies = new Cookies()

export const getCookie = async (name: string) => {
  return await cookies.get(name)
}

export const setCookie = async (name: string, value: string, option?: any) => {
  const date: Date = new Date()
  date.setSeconds(date.getSeconds() + 10800)
  return cookies.set(name, value, { expires: date })
}

export const removeCookie = async (name: string) => {
  return cookies.remove(name)
}
