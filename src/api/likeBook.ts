import axios from "axios"

const likeBook = axios.create({
  baseURL: "http://localhost:8003/likeBook",
  withCredentials: true,
  headers: {},
})

export const saveLikeBook = async (bookId: string): Promise<any> => {
  try {
    return await likeBook({
      url: `/${bookId}`,
      method: "post",
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteLikeBook = async (bookId: string) => {
  try {
    return await likeBook({
      url: `/${bookId}`,
      method: "delete",
    })
  } catch (err) {
    console.log(err)
  }
}

export const getLikeBookList = async () => {
  try {
    return await likeBook({
      url: "/",
      method: "get",
    })
  } catch (err) {
    console.log(err)
  }
}
