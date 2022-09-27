import axios from "axios"

const quiz = axios.create({
  baseURL: "http://localhost:8003",
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean) => {
  return await quiz.post("/quiz", { text, answer })
}
export const getQuizList = async () => {
  return await quiz.get("/quiz")
}
