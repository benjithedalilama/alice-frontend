import React from 'react'
import HubListView from '../hublistview'
import Navbar from '../navbar'
import AddHub from '../addhub'
import HubView from '../hubview'
import { Route, Switch } from 'react-router-dom'

const View = ({ match, location }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Switch>
        <Route exact path='/hubs' component={HubListView} />
        <Route path='/hubs/:id' location={location} component={HubView} />} />
        <Route path='/add-hub' component={AddHub} />
      </Switch>
    </main>
  </div>
)

export default View
