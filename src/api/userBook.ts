import axios from "axios"

const userBook = axios.create({
  baseURL: "http://localhost:8003/userBook",
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
