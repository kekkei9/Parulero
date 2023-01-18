import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import { RootState } from '../../redux/store'

export type DynamicRouterProps = {
  componentList: JSX.Element
  accessibleRoles: Array<string>
  rest: RouteProps
}

const DynamicRouter = ({ componentList, accessibleRoles, ...rest }: DynamicRouterProps): JSX.Element => {
  const { user, isAuthUser } = useSelector((state: RootState) => state.authentication)
  const ResultComponent = (): JSX.Element => {
    if (isAuthUser && user?.roleName && accessibleRoles.includes(user?.roleName as string)) {
      const Component = componentList[user?.roleName]
      return Component()
    }

    if (isAuthUser && user?.roleName && !accessibleRoles.includes(user?.roleName as string)) {
      return <ErrorPage code={403} />
    }

    if (!isAuthUser) {
      return <ErrorPage code={403} />
    }

    return <ErrorPage code={500} />
  }
  return <Route {...rest} element={<ResultComponent />} />
}
export default DynamicRouter
