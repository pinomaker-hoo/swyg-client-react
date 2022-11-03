import axios from "axios"
import { BASE_URL } from "."
import { getCookie } from "../common/Cookie"

const reviewLike = axios.create({
  baseURL: `${BASE_URL}/reviewLike`,
  withCredentials: true,
  headers: {},
})

export const saveReviewLike = async (id: string) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await reviewLike({
      url: `/${id}`,
      method: "post",
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deleteReviewLike = async (id: string) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await reviewLike({
      url: `/${id}`,
      method: "delete",
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getReviewLikeList = async (id: string) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await reviewLike.get(`/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
