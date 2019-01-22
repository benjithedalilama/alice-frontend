import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import Code from '../code'
import List from '../list'

describe('List component', () => {
  let codes

  afterEach(() => {
    codes = null
  })

  it('renders the List component', () => {
    codes = []
    const wrapper = shallow(
      <List className='list__container--small' />
    )
    expect(wrapper.find('.list')).toExist()
  })
})
