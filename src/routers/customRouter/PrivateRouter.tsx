import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import { RootState } from '../../redux/store'

export type PrivateRouterProps = {
  componentList: JSX.Element
  accessibleRoles: Array<string>
  rest: RouteProps
}

const PrivateRouter = ({ component: Component, accessibleRoles, ...rest }) => {
  const { user, isAuthUser } = useSelector((state: RootState) => state.authentication)
  const ResultComponent = (props): JSX.Element => {
    if (isAuthUser && accessibleRoles.includes(user.roleName)) {
      return <Component {...props} />
    }

    if (isAuthUser && !accessibleRoles.includes(user.roleName)) {
      return <ErrorPage code={403} />
    }

    if (!isAuthUser) {
      return <ErrorPage code={403} />
    }

    return <ErrorPage code={500} />
  }
  return <Route {...rest} element={<ResultComponent />} />
}
export default PrivateRouter
