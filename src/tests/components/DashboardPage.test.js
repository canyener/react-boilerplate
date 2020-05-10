import React from 'react'
import { shallow } from 'enzyme'

import DashboardPage from '../../components/DashboardPage'

describe('ExpenseDashboardPage', () => {
  describe('#Snapshots', () => {
    test('Should render ExpenseDashboard correctly', () => {
      const wrapper = shallow(<DashboardPage />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})

