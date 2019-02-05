import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHubs } from '../../actions/hubActions'
import { Link } from 'react-router-dom'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Hub from '../hub'
import List from '../list'

export class HubListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs, filteredHubs } = this.props
    const displayedHubs = filteredHubs? filteredHubs : hubs

    return (
      <List>
        <BreadcrumbsItem to='/hubs'>Hubs</BreadcrumbsItem>
          {displayedHubs.map(hub =>
            <Hub hub={hub}>
              <Link className='list__text--main' to={{ pathname: `/hubs/${hub._id}`, hub: hub}}>{hub.name}</Link>
            </Hub>
          )}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  hubs: state.hub.items,
  filteredHubs: state.hub.filteredItems,
  loading: state.hub.loading,
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(HubListView)
