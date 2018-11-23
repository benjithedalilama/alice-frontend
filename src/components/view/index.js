import React from 'react'
import HubList from '../hublist'
import Navbar from '../navbar'
import AddHub from '../addhub'
import Hub from '../hub'
import { Route, Switch } from 'react-router-dom'

const View = ({ match, location }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Switch>
        <Route exact path='/hubs' component={HubList} />
        <Route path='/hubs/:id' location={location} component={Hub} />} />
        <Route path='/add-hub' component={AddHub} />
      </Switch>
    </main>
  </div>
)

export default View
