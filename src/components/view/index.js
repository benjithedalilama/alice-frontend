import React from 'react'
import HubListView from '../hublistview'
import Navbar from '../navbar'
import AddHubView from '../addhubview'
import HubView from '../hubview'
import { Route, Switch } from 'react-router-dom'

const View = ({ match, location }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Switch>
        <div className='view'>
          <Route exact path='/hubs' component={HubListView} />
          <Route exact path='/hubs/:id' location={location} component={HubView} />
          <Route exact path='/add-hub' component={AddHubView} />
        </div>
      </Switch>
    </main>
  </div>
)

export default View
