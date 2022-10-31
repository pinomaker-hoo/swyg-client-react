import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const reviewLike = axios.create({
  baseURL: `${BASE_URL_LOCAL}/reviewLike`,
  withCredentials: true,
  headers: {},
})

export const saveReviewLike = async (id: string) => {
  try {
    const { data } = await reviewLike({
      url: `/${id}`,
      method: "post",
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
export const deleteReviewLike = async (id: string) => {
  try {
    const { data } = await reviewLike({
      url: `/${id}`,
      method: "delete",
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getReviewLikeList = async (id: string) => {
  try {
    const { data } = await reviewLike.get(`/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
