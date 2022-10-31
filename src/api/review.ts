import axios from "axios"
import { BASE_URL_SERVER } from "."

const review = axios.create({
  baseURL: `${BASE_URL_SERVER}/review`,
  withCredentials: true,
  headers: {},
})

export const saveReview = async (text: string, id: string) => {
  try {
    return await review({
      method: "post",
      url: `/${id}`,
      data: { text },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getReview = async (id: string): Promise<any> => {
  try {
    return await review({
      method: "get",
      url: `/${id}`,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getReviewList = async (id: string) => {
  try {
    return await review.get(`/list/${id}`)
  } catch (err) {
    console.log(err)
  }
}
