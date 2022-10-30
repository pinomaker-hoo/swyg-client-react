import axios from "axios"

const reviewLike = axios.create({
  baseURL: "http://localhost:8003/reviewLike",
  withCredentials: true,
  headers: {},
})

export const saveReviewLike = async (id: string) => {
  try {
    return await reviewLike({
      url: `/${id}`,
      method: "post",
    })
  } catch (err) {
    console.log(err)
  }
}
export const deleteReviewLike = async (id: string) => {
  try {
    return await reviewLike({
      url: `/${id}`,
      method: "delete",
    })
  } catch (err) {
    console.log(err)
  }
}

export const getReviewLikeList = async (id: string) => {
  try {
    return await reviewLike.get(`/${id}`)
  } catch (err) {
    console.log(err)
  }
}
