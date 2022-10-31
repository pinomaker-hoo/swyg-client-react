import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const likeBook = axios.create({
  baseURL: `${BASE_URL_SERVER}/likeBook`,
  withCredentials: true,
  headers: {},
})

export const saveLikeBook = async (bookId: string): Promise<any> => {
  try {
    const { data } = await likeBook({
      url: `/${bookId}`,
      method: "post",
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deleteLikeBook = async (bookId: string) => {
  try {
    const { data } = await likeBook({
      url: `/${bookId}`,
      method: "delete",
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getLikeBookList = async (): Promise<any> => {
  try {
    const { data } = await likeBook({
      url: "/",
      method: "get",
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
