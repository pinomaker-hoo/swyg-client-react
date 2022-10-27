import axios from "axios"
const KakaoKey = "f8e6e54fa6a6a1af7adf51a197880f75"

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KakaoKey}`,
  },
})

const book = axios.create({
  baseURL: "http://localhost:8003/book",
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

export const SaveBook = async (data: any) => {
  return await book({
    method: "post",
    url: "/",
    data: {
      title: data.title,
      contents: data.contents,
      authors: data.authors[0],
      publisher: data.publisher,
      thumbnail: data.thumbnail,
      //   datetime: data.datetime,
      isbn: data.isbn,
    },
  })
}

export const getBookListCount = async (count: number) => {
  return await book.get(`/count/${count}`)
}

export const getBook = async (idx: string) => {
  return await book.get(`/${idx}`)
}
