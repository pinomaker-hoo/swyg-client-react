import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
import { useLogined } from "../common/Hooks"

const mate = axios.create({
  baseURL: `${BASE_URL_SERVER}/mate`,
  withCredentials: true,
  headers: {},
})

export const saveMate = async (name: string) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await mate({ method: "post", url: "/", data: { name } })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getMate = async () => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await mate({ method: "get", url: "/" })
    return data
  } catch (err) {
    console.log(err)
  }
}
