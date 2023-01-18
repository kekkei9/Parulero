import { useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import { RootState } from '../../redux/store'

export interface IErrorPageProps {
  code: number
}

const ErrorPage = ({ code = 404 }: IErrorPageProps) => {
  const { isAuthUser } = useSelector((state: RootState) => state.authentication)
  const subTitlte = useMemo(() => {
    switch (code) {
      case 403:
        return 'Sorry, You can not access this page.'
      case 404:
        return 'Sorry, The page you visit does not exist.'
      case 500:
        return 'Sorry, something went wrong'
      default:
        return 'Sorry, something went wrong.'
    }
  }, [code])
  return (
    <div className="page" style={{ marginTop: '10rem' }}>
      <h1>{code}</h1>
      <p>{subTitlte}</p>
    </div>
  )
}
export default ErrorPage
