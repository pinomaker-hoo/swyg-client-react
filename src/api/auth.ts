import axios from "axios"

const auth = axios.create({
  baseURL: "http://localhost:8003",
  headers: {
    Credential: true,
  },
})


export const register = async (user: {
  email: string
  password: string
  name: string
}) => {
  return await auth.post("/auth", user)
}
