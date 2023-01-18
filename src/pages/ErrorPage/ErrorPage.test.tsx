/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/ErrorPage/ErrorPage.test.tsx

Created with;
$ npx generate-react-cli component ErrorPage --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from './ErrorPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/ErrorPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<ErrorPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ErrorPage code={0} {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
