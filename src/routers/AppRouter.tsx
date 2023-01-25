import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import FirstPage from '../pages/FirstPage/FirstPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
// import PATH from './routerPath/publicPath'

const AppRouter = () => (
  <Routes>
    <Route path="/*" element={<ErrorPage code={404} />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/first" element={<FirstPage />} />
    {/* for production deployment */}
    {/* <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} /> */}
  </Routes>
)

export default AppRouter
