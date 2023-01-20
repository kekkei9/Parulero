import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme, Theme } from '@mui/material/styles'

type ThemeState = {
  theme: string
}

const initialState: ThemeState = {
  theme: localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => ({ theme: action.payload.theme ||  window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light' }),
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer