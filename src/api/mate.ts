import axios from "axios"
import { BASE_URL_SERVER } from "."

const mate = axios.create({
  baseURL: `${BASE_URL_SERVER}/mate`,
  withCredentials: true,
  headers: {},
})

export const saveMate = async (name: string) => {
  return await mate({ method: "post", url: "/", data: { name } })
}

export const getMate = async () => {
  return await mate({ method: "get", url: "/" })
}
