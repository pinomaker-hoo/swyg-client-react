import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
import { useLogined } from "../common/Hooks"

const userBook = axios.create({
  baseURL: `${BASE_URL_SERVER}/userBook`,
  withCredentials: true,
  headers: {},
})

export const saveUserBook = async (bookIdx: string) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await userBook({
      method: "post",
      url: `/${bookIdx}`,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getUserBookList = async () => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await userBook.get("/")
    return data
  } catch (err) {
    console.log(err)
  }
}
