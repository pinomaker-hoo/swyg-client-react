import axios from "axios"

const quiz = axios.create({
  baseURL: "http://localhost:8003/quiz",
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean, id: string) => {
  return await quiz({
    url: `/${id}`,
    method: "post",
    data: { text, answer },
  })
}
export const getQuizList = async (id: string) => {
  return await quiz.get(`/${id}`)
}
