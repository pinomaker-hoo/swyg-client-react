import axios from "axios"
import { BASE_URL_SERVER } from "."

const quiz = axios.create({
  baseURL: `${BASE_URL_SERVER}/quiz`,
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean, id: string) => {
  try {
    return await quiz({
      url: `/${id}`,
      method: "post",
      data: { text, answer },
    })
  } catch (err) {
    console.log(err)
  }
}
export const getQuizList = async (id: string) => {
  try {
    return await quiz.get(`/${id}`)
  } catch (err) {
    console.log(err)
  }
}

export const getQuiz = async (id: string) => {
  try {
    return await quiz.get(`/quiz/${id}`)
  } catch (err) {
    console.log(err)
  }
}
