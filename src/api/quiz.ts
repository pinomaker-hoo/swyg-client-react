import axios from "axios"
import { BASE_URL } from "."
import { useLogined } from "../common/Hooks"

const quiz = axios.create({
  baseURL: `${BASE_URL}/quiz`,
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean, id: string) => {
  try {
    const logined = await useLogined()
    if (!logined) {
      alert("로그인 해주세요")
      return (location.href = "/")
    }
    const { data } = await quiz({
      url: `/${id}`,
      method: "post",
      data: { text, answer },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getQuizList = async (id: string) => {
  try {
    const { data } = await quiz.get(`/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getQuiz = async (id: string) => {
  try {
    const { data } = await quiz.get(`/quiz/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
