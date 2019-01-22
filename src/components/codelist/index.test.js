import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import Code from '../code'
import CodeList from './index.js'

describe('CodeList component', () => {
  let codes

  afterEach(() => {
    codes = null
  })

  it('renders the CodeList component', () => {
    codes = []
    const wrapper = shallow(
      <CodeList className='list__container--small' codes={codes} parent={{ _id: 1 }} />
    )
    expect(wrapper.find('.list__container--small')).toExist()
  })

  it('renders the CodeList component with 2 codes', () => {
    codes = [
      {
        _id: 1,
        name: 'zoop',
        version: 1.0,
        action: 'setHumidity',
        commands: [],
        createdAt: '20180124'
      },
      {
        _id: 2,
        name: 'scoop',
        version: 1.2,
        action: 'setHumidity',
        commands: [],
        createdAt: '20180124'
      },
    ]
    const wrapper = shallow(
      <CodeList className='list__container--small' codes={codes} parent={{ _id: 1 }} />
    )
    expect(wrapper.find(Link).find('.list__text--main')).toHaveLength(3)
  })

  it('renders the List component with 4 iconbuttons', () => {
    codes = [
      {
        _id: 1,
        name: 'zoop',
        version: 1.0,
        action: 'setHumidity',
        commands: [],
        createdAt: '20180124'
      },
    ]
    const wrapper = shallow(
      <CodeList className='list__container--small' codes={codes} parent={{ _id: 1 }} />
    )
    expect(wrapper.find(Code).dive().find('.list__button')).toHaveLength(2)
  })
})
