// authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    }
  }
})

export const { setAccessToken } = authSlice.actions
export const selectAccessToken = (state: any) => state.auth.accessToken

export default authSlice.reducer
