import axios from "axios"
import { BASE_URL } from "."
import { getCookie } from "../common/Cookie"

const review = axios.create({
  baseURL: `${BASE_URL}/review`,
  withCredentials: true,
  headers: {},
})

export const saveReview = async (text: string, id: string) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await review({
      method: "post",
      url: `/${id}`,
      data: { text },
      headers: { accesstoken: token },
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
    const { data } = await review.get(`/list/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
