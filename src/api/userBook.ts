import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const userBook = axios.create({
  baseURL: `${BASE_URL_LOCAL}/userBook`,
  withCredentials: true,
  headers: {},
})

export const saveUserBook = async (bookIdx: string) => {
  try {
    const { data } = await userBook({
      method: "post",
      url: `/${bookIdx}`,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getUserBookList = async () => {
  try {
    const { data } = await userBook.get("/")
    return data
  } catch (err) {
    console.log(err)
  }
}
