import axios from "axios"
const KakaoKey = "f8e6e54fa6a6a1af7adf51a197880f75"

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KakaoKey}`,
  },
})

const book = axios.create({
  //   baseURL: "http://localhost:8003",
  withCredentials: true,
  headers: {},
})

export const KakaoSearch = async (params: any) => {
  return await Kakao.get("/v3/search/book", { params })
}

export const SaveBook = async (data: any) => {
  return await book({
    method: "post",
    url: "http://localhost:8003/book",
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
