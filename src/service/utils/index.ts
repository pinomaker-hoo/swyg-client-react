// ** Redux Imports
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// ** Other Imports
import { Mutex } from "async-mutex"
import { updateUser, userLogout } from "@/store/apps/auth"

const baseUrl = "/api"

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers: any, { getState }: any) => {
    const {
      auth: {
        user: { accessToken },
      },
    } = getState()
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`)
    }

    return headers
  },
  baseUrl,
})

const mutex = new Mutex()
export const customFetchBase = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 401 || result.error?.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const {
          auth: {
            user: { accessToken, refreshToken },
          },
        } = api.getState()

        const { data }: any = await baseQuery(
          {
            url: "/admin/reissue",
            method: "POST",
            body: { accessToken, refreshToken },
          },
          api,
          extraOptions
        )
        if (data) {
          const { accessToken, refreshToken } = data.data
          api.dispatch(updateUser({ accessToken, refreshToken }))
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(userLogout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
