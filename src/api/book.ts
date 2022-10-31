import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."
const KakaoKey = "f8e6e54fa6a6a1af7adf51a197880f75"

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KakaoKey}`,
  },
})

const book = axios.create({
  baseURL: `${BASE_URL_LOCAL}/book`,
  withCredentials: true,
  headers: {},
})

/**
 *
 * @param params query : text, size : number, target : "title"
 * @returns
 */
export const KakaoSearch = async (params: any) => {
  return await Kakao.get("/v3/search/book", { params })
}

export const SaveBook = async (book: any) => {
  try {
    const { data } = await book({
      method: "post",
      url: "/",
      data: {
        title: book.title,
        contents: book.contents,
        authors: book.authors[0],
        publisher: book.publisher,
        thumbnail: book.thumbnail,
        //   datetime: data.datetime,
        isbn: book.isbn,
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
