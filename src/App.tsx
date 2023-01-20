import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import './App.scss'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider, createTheme } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import CssBaseline from '@mui/material/CssBaseline'
import store, { RootState } from './redux/store'
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeApp />
      </Provider>
    </BrowserRouter>
  )
}

function ThemeApp() {
  const { theme } = useSelector((state: RootState) => state.theme)
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: theme,
        },
        typography: {
          fontFamily: ['Josefin Sans', 'sans-serif'].join(),
        },
      })}
    >
      <CssBaseline />
      <Suspense fallback="loading">
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
