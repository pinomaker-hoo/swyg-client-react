import axios from "axios"

const mate = axios.create({
  baseURL: "http://localhost:8003/mate",
  withCredentials: true,
  headers: {},
})

export const saveMate = async (name: string) => {
  return await mate({ method: "post", url: "/", data: { name } })
}

export const getMate = async () => {
  return await mate({ method: "get", url: "/" })
}
