import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const quiz = axios.create({
  baseURL: `${BASE_URL_LOCAL}/quiz`,
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean, id: string) => {
  try {
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
