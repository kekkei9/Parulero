import { createSlice } from '@reduxjs/toolkit'

type AuthenticationState = {
  isAuthUser: boolean
  user: {
    roleName?: string
  }
}

const initialState: AuthenticationState = {
  isAuthUser: !!localStorage.getItem('user'),
  user: JSON.parse(localStorage.getItem('user') as string) || {},
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      isAuthUser: true,
      user: action.payload,
    }),
    logout: (state) => ({ ...state, isAuthUser: false, user: {} }),
  },
})

export const { setUser, logout } = authenticationSlice.actions

export default authenticationSlice.reducer