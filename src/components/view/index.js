import React, { Component } from 'react'

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
import ProtectedRoute from '../protectedroute'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Route, Switch, Link, matchPath } from 'react-router-dom'

const BreadcrumbsLink = (props) => (
  <Link to={props.to} className='navbar__link'>
    {props.children}
  </Link>
)

export class View extends Component {
  render () {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/hubs/:hubId',
      strict: false
    })

    return (
      <div>
        <header>
          <div className="navbar">
            <div className="navbar__element navbar__breadcrumbs">
              <Breadcrumbs
                separator={<b> / </b>}
                item={BreadcrumbsLink}
                finalItem={'b'}
              />
            </div>
            <Searchbar className="navbar__element navbar__element--centered"></Searchbar>
            <ProfilePreview className="navbar__element">
            <Route exact path='/hubs' render={() => (<button onClick={() => this.props.changePage('/add-hub')} className="button button--alt profilePreview__element">ADD HUB</button>)}/>
            <Route exact path={['/hubs/:hubId', '/hubs/:hubId/sensors']} render={() => (<button onClick={() => this.props.changePage(`/hubs/${match.params.hubId}/add-sensor`)} className="button button--alt profilePreview__element">ADD SENSOR</button>)}/>
            <Route exact path={['/hubs/:hubId', '/hubs/:hubId/codes']} render={() => (<button onClick={() => this.props.changePage(`/hubs/${match.params.hubId}/add-code`)} className="button button--alt profilePreview__element">ADD CODE</button>)}/>
            </ProfilePreview>
          </div>
        </header>

        <main>
          <Switch>
            <div className='view'>
              <ProtectedRoute exact path='/hubs' component={HubListView} isAuthenticated={this.props.isAuthenticated}/>
              <ProtectedRoute exact path='/hubs/:hubId' component={HubView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/sensors' component={SensorListView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/sensors/:sensorId' component={SensorView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/codes' component={CodeListView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/codes/:codeId' component={CodeView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/add-hub' component={AddHubView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/add-sensor' component={AddSensorView} isAuthenticated={this.props.isAuthenticated} />
              <ProtectedRoute exact path='/hubs/:hubId/add-code' component={AddCodeView} isAuthenticated={this.props.isAuthenticated} />
            </div>
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.loggedIn
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (destination) => push(destination)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
