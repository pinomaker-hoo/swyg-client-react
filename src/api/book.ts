import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
const REST_API_KEY = "f8e6e54fa6a6a1af7adf51a197880f75"

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
})

const book = axios.create({
  baseURL: `${BASE_URL_SERVER}/book`,
  withCredentials: true,
  headers: {},
})

/**
 *
 * @param params query : text, size : number, target : "title"
 * @returns
 */

export const BookSearch = (params: any) => {
  try {
    return Kakao.get("/v3/search/book", { params })
  } catch (err) {
    console.log(err)
  }
}

export const SaveBook = async (bookData: any) => {
  try {
    const { data } = await book({
      method: "post",
      url: "/",
      data: {
        title: bookData.title,
        contents: bookData.contents,
        authors: bookData.authors[0],
        publisher: bookData.publisher,
        thumbnail: bookData.thumbnail,
        isbn: bookData.isbn,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getBookListCount = async (count: number) => {
  try {
    const { data } = await book.get(`/count/${count}`)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getBook = async (idx: string) => {
  try {
    const { data } = await book.get(`/${idx}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
