import React from 'react'
import HubListView from '../hublistview'
import Navbar from '../navbar'
import AddHubView from '../addhubview'
import HubView from '../hubview'
import SensorView from '../sensorview'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'

const View = ( props ) => (
  <div>
    <header>
      <Navbar>
        <Route exact path='/hubs' render={() => (<button onClick={() => props.changePage('/add-hub')} className="button button--alt">ADD HUB</button>)}/>
        <Route exact path='/hubs/:hubId' render={() => (<button onClick={() => props.changePage('/add-sensor')} className="button button--alt">ADD SENSOR</button>)}/>
      </Navbar>
    </header>

    <main>
      <Switch>
        <div className='view'>
          <Route exact path='/hubs' component={HubListView} />
          <Route exact path='/hubs/:hubId' location={props.location} component={HubView} />
          <Route exact path='/add-hub' component={AddHubView} />
          <Route exact path='/hubs/:hubId/sensors/:sensorId' location={props.location} component={SensorView} />
        </div>
      </Switch>
    </main>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (destination) => push(destination)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(View)
