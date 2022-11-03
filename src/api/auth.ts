import axios from "axios"
import { BASE_URL } from "."
import { getCookie } from "../common/Cookie"
import { useLogined } from "../common/Hooks"

const auth = axios.create({
  baseURL: `${BASE_URL}/auth`,
  withCredentials: true,
  headers: {},
})

export const login = async (user: { email: string; password: string }) => {
  try {
    const { data } = await auth.post("/local", user)
    return data
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
    const { data } = await auth({
      url: "/",
      method: "post",
      data: {
        ...user,
        birth,
        male,
      },
      withCredentials: true,
    })

    return data
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
    const token = await getCookie("accesstoken")
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await auth.get("/", {
      headers: { accessToken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const updateImg = async (formData: any) => {
  try {
    const token = await getCookie("accesstoken")
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await auth.patch("/", formData, {
      headers: { accessToken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
