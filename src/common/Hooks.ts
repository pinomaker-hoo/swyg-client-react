import { useNavigate } from "react-router-dom"
import { getCookie } from "./Cookie"

export const useNull = (arr: any[]) => {
  for (const item of arr) {
    if (!item) return false
  }
  return true
}

export const useSame = (a: any, b: any) => {
  if (a !== b) return false
  return true
}

export const useLogined = async (): Promise<boolean> => {
  const cookie = await getJwtCookie()
  return cookie ? true : false
}

export const getJwtCookie = async (): Promise<string> => {
  return await getCookie("accessToken")
}
