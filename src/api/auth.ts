import axios from "axios"

const auth = axios.create({
  baseURL: "http://localhost:8003/auth",
  withCredentials: true,
  headers: {},
})

export const login = async (user: { email: string; password: string }) => {
  return await auth.post("/local", user)
}

export const register = async (
  user: {
    email: string
    password: string
    name: string
  },
  birth: string,
  male: boolean
) => {
  return await auth.post("/", {
    ...user,
    birth,
    male,
  })
}

export const sendMail = async (email: string) => {
  return await auth.post("/mail", {
    email,
  })
}

export const getUserInfo = async () => {
  return await auth.get("/")
}

export const updateImg = async (formData: any) => {
  return await auth.patch("/", formData)
}
