import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Sensor from '../sensor'
import List from '../list'
import Reading from '../reading'

export class SensorView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    let sensor

    const { sensors } = this.props.hub

    // FIX ME
    if (sensor == null) {
      sensor = sensors[0]
    }
    else {
      sensor = sensors.find(newSensor => newSensor._id === parseInt(this.props.match.params.sensorId,10))
    }

    return (
      <div className='list__container'>
        <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${this.props.hub._id}`}>{this.props.hub._id}</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${this.props.hub._id}/sensors`}>Sensors</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${this.props.hub._id}/sensors/${sensor._id}`}>{sensor._id}</BreadcrumbsItem>
        <div className='list'>
          <Sensor sensor={sensor}>
            <div className='list__text--main'>{sensor.name}</div>
          </Sensor>
          <div className='sublist__container'>
            <List className='list__container'>
              <div className='list__itemContainer'>
                <div className='list__item'>
                  <div className='list__item__top list__text--main'>Readings</div>
                </div>
              </div>
              {sensor.readings.map(reading =>
                <Reading reading={reading} />
              )}
            </List>
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
