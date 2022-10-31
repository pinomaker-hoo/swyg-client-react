import axios from "axios"
import { BASE_URL_SERVER } from "."

const pointApi = axios.create({
  baseURL: `${BASE_URL_SERVER}/point`,
  withCredentials: true,
  headers: {},
})

export const savePoint = async (point: number) => {
  try {
    return await pointApi({
      url: "/",
      method: "post",
      data: {
        point,
      },
      withCredentials: true,
    })
  } catch (err) {
    console.log(err)
  }
}
