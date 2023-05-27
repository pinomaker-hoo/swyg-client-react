import { useMemo } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { getAccessToken } from "@/store/apps/auth"

export function ProtectRoute({ target }: any) {
  const accessToken = useSelector(getAccessToken)
  const logined = useMemo(() => {
    return accessToken === "" ? false : true
  }, [accessToken])

  return logined ? <Outlet /> : <Navigate to="/" />
}

export function PublicRoute({ target }: any) {
  const accessToken = useSelector(getAccessToken)
  const logined = useMemo(() => {
    return accessToken === "" ? false : true
  }, [accessToken])

  return logined ? <Navigate to="/phone" /> : <Outlet />
}
