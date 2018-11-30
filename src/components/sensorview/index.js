import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import Sensor from '../sensor'

export class SensorView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    let sensor
    
    const { sensors } = this.props.hub
    sensor = !sensor ?
      sensors[0] :
      sensors.find(sensor => sensor.id === parseInt(this.props.match.params.sensorId, 10))

    return (
      <div className='list__container'>
        <div className='list'>
          <Sensor sensor={sensor}>
            <div className='list__text--main'>{sensor.name}</div>
          </Sensor>
          <div className='sublist__container'>
          </div>
        </div>
      </div>
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
)(SensorView)
