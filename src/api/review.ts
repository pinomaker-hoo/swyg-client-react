import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
import { useLogined } from "../common/Hooks"

const review = axios.create({
  baseURL: `${BASE_URL_SERVER}/review`,
  withCredentials: true,
  headers: {},
})

export const saveReview = async (text: string, id: string) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await review({
      method: "post",
      url: `/${id}`,
      data: { text },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getReview = async (id: string): Promise<any> => {
  try {
    const { data } = await review({
      method: "get",
      url: `/${id}`,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getReviewList = async (id: string) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await review.get(`/list/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
