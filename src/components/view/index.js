import React from 'react'
import HubList from '../hublist'
import Navbar from '../navbar'
import { Route } from 'react-router-dom'

const View = ({ match }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main className='listContainer'>
      <Route path='/hubs' component={HubList} />
    </main>
  </div>
)

export default View
