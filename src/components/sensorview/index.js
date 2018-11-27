import React, { Component } from 'react'
import Sensor from '../sensor'

export class SensorView extends Component {
  render() {
    const { sensor } = this.props.location

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

export default SensorView
