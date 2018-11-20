import React from 'react'
import { HubList } from '../hublist'
import { shallow } from 'enzyme'

describe('HubList component', () => {
  let match
  let dispatch

  beforeAll(() => {
    match = {
      url: ""
    }
    dispatch = () => {}
  })

  afterAll(() => {
    match = null
    dispatch = null
  })

  it('renders the HubList component', () => {
    const hubs = []
    const wrapper = shallow(<HubList hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find(HubList)).toBeTruthy()
  })

  it('renders the HubList component with 2 hubs', () => {
    const hubs = [
      {
        id: 1,
        name: 'Berlin-3',
        deployed:	false,
        createdAt: '20180124',
        sensors: [],
        controlCodes: []
      },
      {
        id: 2,
        name: 'Munich-3',
        deployed:	false,
        createdAt: '20180124',
        sensors: [],
        controlCodes: []
      },
    ]
    const wrapper = shallow(<HubList hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list__item')).toHaveLength(2)
  })
})
