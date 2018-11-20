import React from 'react'
import { HubList } from '../hublist'
import { shallow } from 'enzyme'

describe('HubList component', () => {
  let match
  let dispatch
  let hubs

  beforeEach(() => {
    match = {
      url: ""
    }
    dispatch = () => {}
  })

  afterEach(() => {
    match = null
    dispatch = null
    hubs = null
  })

  it('renders the HubList component', () => {
    const hubs = []
    const wrapper = shallow(<HubList hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list')).toExist()
  })

  it('renders the HubList component with 2 hubs', () => {
    hubs = [
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

  it('renders the HubList component with 4 iconbuttons', () => {
    hubs = [
      {
        id: 1,
        name: 'Berlin-3',
        deployed:	false,
        createdAt: '20180124',
        sensors: [],
        controlCodes: []
      },
    ]
    const wrapper = shallow(<HubList hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list__button')).toHaveLength(4)
  })
})
