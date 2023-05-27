// ** Redux Imports
import { RootState } from "@/store"
import { createSlice } from "@reduxjs/toolkit"

interface AuthStateProps {
  user: {
    name: string
    accessToken: string
    refreshToken: string
  }
}

const initialState: AuthStateProps = {
  user: {
    name: "",
    accessToken: "",
    refreshToken: "",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload,
      }
    },
    userLogout: (state) => {
      state.user = { ...initialState.user }
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) => state.auth.user.accessToken

export const { updateUser, userLogout } = authSlice.actions
