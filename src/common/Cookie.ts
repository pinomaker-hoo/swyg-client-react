import { Cookies } from "react-cookie"

const cookies = new Cookies()

export const getCookie = async (name: string) => {
  return await cookies.get(name)
}

export const setCookie = async (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option })
}

export const removeCookie = async (name: string) => {
  return cookies.remove(name)
}
