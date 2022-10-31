import axios from "axios"
import { BASE_URL_SERVER } from "."

const userBook = axios.create({
  baseURL: `${BASE_URL_SERVER}/userBook`,
  withCredentials: true,
  headers: {},
})

export const saveUserBook = async (bookIdx: string) => {
  try {
    return await userBook({
      method: "post",
      url: `/${bookIdx}`,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUserBookList = async () => {
  try {
    return await userBook.get("/")
  } catch (err) {
    console.log(err)
  }
}
