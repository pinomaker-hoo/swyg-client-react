import axios from "axios"
import { BASE_URL } from "."
import { getCookie } from "../common/Cookie"

const pointApi = axios.create({
  baseURL: `${BASE_URL}/point`,
  withCredentials: true,
  headers: {},
})

export const savePoint = async (point: number) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await pointApi({
      url: "/",
      method: "post",
      data: {
        point,
      },
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPoint = async () => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await pointApi.get("/", {
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
