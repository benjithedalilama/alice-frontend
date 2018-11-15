import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHubs } from "../../actions/hubsActions"
import './hublist.css'

class HubList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs } = this.props

    return (
      <ul>
        {hubs.map(hub =>
          <li key={hub.id}>{hub.name + ' ' + hub.createdAt}</li>
        )}
      </ul>
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
)(HubList)
