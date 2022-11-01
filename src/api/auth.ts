import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
import { useLogined } from "../common/Hooks"

const auth = axios.create({
  baseURL: `${BASE_URL_SERVER}/auth`,
  withCredentials: true,
  headers: {},
})

export const login = async (user: { email: string; password: string }) => {
  try {
    return await auth.post("/local", user)
  } catch (err) {
    console.log(err)
  }
}

export const register = async (
  user: {
    email: string
    password: string
    name: string
  },
  birth: string,
  male: boolean
) => {
  try {
    return await auth.post("/", {
      ...user,
      birth,
      male,
    })
  } catch (err) {
    console.log(err)
  }
}

export const sendMail = async (email: string) => {
  const { data } = await auth.post("/mail", {
    email,
  })
  return data
}

export const getUserInfo = async () => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await auth.get("/")
    return data
  } catch (err) {
    console.log(err)
  }
}

export const updateImg = async (formData: any) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await auth.patch("/", formData)
    return data
  } catch (err) {
    console.log(err)
  }
}
