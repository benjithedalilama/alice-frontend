import React from 'react'
import HubListView from '../hublistview'
import Navbar from '../navbar'
import AddHubView from '../addhubview'
import HubView from '../hubview'
import SensorView from '../sensorview'
import { Route, Switch } from 'react-router-dom'

const View = ({ location }) => (
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
          <Route exact path='/hubs/:hubId/sensors/:id' location={location} component={SensorView} />
        </div>
      </Switch>
    </main>
  </div>
)

export default View
