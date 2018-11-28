import React from 'react'
import { Link } from 'react-router-dom'
import Sensor from '../sensor'
import List from '../list'

const SensorList = (props) => (
  <List className='list__container--small'>
    <div className='list__itemContainer'>
      <div className='list__item'>
        <div className='list__item__top list__text'>Sensors</div>
      </div>
    </div>
    {props.sensors.map(sensor =>
      <Sensor sensor={sensor}>
        <Link className='list__text--main' to={{ pathname: '/hubs/' + props.parent.id + '/sensors/' + sensor.id, sensor: sensor}}>{sensor.name}</Link>
      </Sensor>
    )}
  </List>
)

export default SensorList
