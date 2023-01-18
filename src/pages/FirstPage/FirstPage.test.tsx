/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/FirstPage/FirstPage.test.tsx

Created with;
$ npx generate-react-cli component FirstPage --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import FirstPage from './FirstPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/FirstPage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<FirstPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<FirstPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
