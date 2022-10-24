import axios from "axios"

const review = axios.create({
  baseURL: "http://localhost:8003/review",
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

export const getReview = async (id: string) => {
  try {
    return await review({
      method: "get",
      url: `/${id}`,
    })
  } catch (err) {
    console.log(err)
  }
}
