import React from 'react'
import { ListView } from '../hublist'
import { shallow } from 'enzyme'

describe('ListView component', () => {
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

  it('renders the ListView component', () => {
    const hubs = []
    const wrapper = shallow(<ListView hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list')).toExist()
  })

  it('renders the ListView component with 2 hubs', () => {
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
    const wrapper = shallow(<ListView hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list__item')).toHaveLength(2)
  })

  it('renders the ListView component with 4 iconbuttons', () => {
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
    const wrapper = shallow(<ListView hubs={hubs} match={match} dispatch={dispatch}/>)
    expect(wrapper.find('.list__button')).toHaveLength(4)
  })
})
