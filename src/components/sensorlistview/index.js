import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import { Link } from 'react-router-dom'
import Sensor from '../sensor'
import List from '../list'

export class SensorListView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    const { sensors } = this.props.hub

    return (
      <List>
          {sensors.map(sensor =>
            <Sensor sensor={sensor}>
              <Link className='list__text--main' to={{ pathname: `/hubs/${this.props.match.params.hubId}/sensors/${sensor.id}`, sensor: sensor}}>{sensor.name}</Link>
            </Sensor>
          )}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  hub: state.hub.item,
  loading: state.hub.loading,
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(SensorListView)
