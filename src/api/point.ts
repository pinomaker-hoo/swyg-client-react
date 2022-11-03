import axios from "axios"
import { BASE_URL } from "."
import { useLogined } from "../common/Hooks"

const pointApi = axios.create({
  baseURL: `${BASE_URL}/point`,
  withCredentials: true,
  headers: {},
})

export const savePoint = async (point: number) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await pointApi({
      url: "/",
      method: "post",
      data: {
        point,
      },
      withCredentials: true,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPoint = async () => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await pointApi.get("/")
    return data
  } catch (err) {
    console.log(err)
  }
}
