import axios from "axios"

const pointApi = axios.create({
  baseURL: "http://localhost:8003/point",
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
