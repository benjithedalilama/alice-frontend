import React from 'react'

import Searchbar from '../searchbar'
import ProfilePreview from '../profilepreview'
import HubView from '../hubview'
import HubListView from '../hublistview'
import SensorView from '../sensorview'
import SensorListView from '../sensorlistview'
import CodeView from '../codeview'
import CodeListView from '../codelistview'
import AddHubView from '../addhubview'
import AddSensorView from '../addsensorview'
import AddCodeView from '../addcodeview'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Route, Switch, Link } from 'react-router-dom'

const Loaf = (props) => (
  <Link to={props.to} className='navbar__link'>
    {props.children}
  </Link>
)

const View = ( props ) => (
  <div>
    <header>
      <div className="navbar">
        <div className="navbar__element navbar__breadcrumbs">
          <Breadcrumbs
            separator={<b> / </b>}
            item={Loaf}
            finalItem={'b'}
          />
        </div>
        <Searchbar className="navbar__element navbar__element--centered"></Searchbar>
        <ProfilePreview className="navbar__element">
        <Route exact path='/hubs' render={() => (<button onClick={() => props.changePage('/add-hub')} className="button button--alt profilePreview__element">ADD HUB</button>)}/>
        <Route exact path={['/hubs/:hubId', '/hubs/:hubId/sensors']} render={() => (<button onClick={() => props.changePage('/add-sensor')} className="button button--alt profilePreview__element">ADD SENSOR</button>)}/>
        <Route exact path={['/hubs/:hubId', '/hubs/:hubId/codes']} render={() => (<button onClick={() => props.changePage('/add-code')} className="button button--alt profilePreview__element">ADD CODE</button>)}/>
        </ProfilePreview>
      </div>
    </header>

    <main>
      <Switch>
        <div className='view'>
          <Route exact path='/hubs' component={HubListView} />
          <Route exact path='/hubs/:hubId' component={HubView} />
          <Route exact path='/hubs/:hubId/sensors' component={SensorListView} />
          <Route exact path='/hubs/:hubId/sensors/:sensorId' component={SensorView} />
          <Route exact path='/hubs/:hubId/codes' component={CodeListView} />
          <Route exact path='/hubs/:hubId/codes/:codeId' component={CodeView} />
          <Route exact path='/add-hub' component={AddHubView} />
          <Route exact path='/add-sensor' component={AddSensorView} />
          <Route exact path='/add-code' component={AddCodeView} />
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
