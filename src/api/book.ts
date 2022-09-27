import axios from "axios"
const KakaoKey = "f8e6e54fa6a6a1af7adf51a197880f75"

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KakaoKey}`,
  },
})

export const KakaoSearch = async (params: any) => {
  return await Kakao.get("/v3/search/book", { params })
}
