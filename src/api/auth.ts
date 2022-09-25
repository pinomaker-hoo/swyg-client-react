import axios from "axios"

const auth = axios.create({
  baseURL: "http://localhost:8003",
  withCredentials: true,
  headers: {},
})

export const login = async (user: { email: string; password: string }) => {
  return await auth.post("/auth/local", user)
}

export const register = async (user: {
  email: string
  password: string
  name: string
}) => {
  return await auth.post("/auth", user)
}
