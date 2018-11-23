import React from 'react'
import HubList from '../hublist'
import Navbar from '../navbar'
import AddHub from '../addhub'
import { Route } from 'react-router-dom'

const View = ({ match }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <div className='listContainer'>
        <Route exact path='/hubs' component={HubList} />
      </div>
      <Route exact path='/add-hub' component={AddHub} />
    </main>
  </div>
)

export default View
