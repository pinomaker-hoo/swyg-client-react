import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const mate = axios.create({
  baseURL: `${BASE_URL_LOCAL}/mate`,
  withCredentials: true,
  headers: {},
})

export const saveMate = async (name: string) => {
  try {
    const { data } = await mate({ method: "post", url: "/", data: { name } })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getMate = async () => {
  try {
    const { data } = await mate({ method: "get", url: "/" })
    return data
  } catch (err) {
    console.log(err)
  }
}
