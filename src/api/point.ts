import axios from "axios"
import { BASE_URL_LOCAL, BASE_URL_SERVER } from "."

const pointApi = axios.create({
  baseURL: `${BASE_URL_SERVER}/point`,
  withCredentials: true,
  headers: {},
})

export const savePoint = async (point: number) => {
  try {
    const { data } = await pointApi({
      url: "/",
      method: "post",
      data: {
        point,
      },
      withCredentials: true,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPoint = async () => {
  try {
    const { data } = await pointApi.get("/")
    return data
  } catch (err) {
    console.log(err)
  }
}
