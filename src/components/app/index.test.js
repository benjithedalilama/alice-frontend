import React from 'react'
import { render } from 'react-dom'
import App from '../app'
import { shallow } from 'enzyme'

describe('App component', () => {
  it('renders the App component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(App)).toBeTruthy()
  })
})
