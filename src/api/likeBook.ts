import axios from "axios"
import { BASE_URL } from "."
import { getCookie } from "../common/Cookie"

const likeBook = axios.create({
  baseURL: `${BASE_URL}/likeBook`,
  withCredentials: true,
  headers: {},
})

export const saveLikeBook = async (bookId: string): Promise<any> => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await likeBook({
      url: `/${bookId}`,
      method: "post",
      headers: {
        accesstoken: token,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deleteLikeBook = async (bookId: string) => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await likeBook({
      url: `/${bookId}`,
      method: "delete",
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getLikeBookList = async (): Promise<any> => {
  try {
    const token = await getCookie("accesstoken")
    if (!token) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await likeBook({
      url: "/",
      method: "get",
      headers: {
        accesstoken: token,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
