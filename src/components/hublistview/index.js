import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHubs } from '../../actions/hubsActions'
import { Link } from 'react-router-dom'
import Hub from '../hub'
import List from '../list'

export class HubListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs } = this.props

    return (
      <List>
          {hubs.map(hub =>
            <Hub hub={hub}>
              <Link className='list__text--main' to={{ pathname: '/hubs/' + hub.id }}>{hub.name}</Link>
            </Hub>
          )}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  hubs: state.hubs.items,
  loading: state.hubs.loading,
  error: state.hubs.error
})

export default connect(
  mapStateToProps
)(HubListView)
