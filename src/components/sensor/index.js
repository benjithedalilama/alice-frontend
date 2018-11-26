import React from 'react'
import IconButton from '../iconbutton'

const Sensor = ({sensor, children}) => (
  <div className='list__itemContainer' key={sensor.id}>
    <div className='list__item'>
      <div className='list__item__top'>
        <div className='list__text'>
          {children}
          <div className='list__text--alt'>{sensor.id}</div>
        </div>
        <div className='list__buttons'>
          <IconButton className='list__button' id={sensor.id} type='delete'/>
          <IconButton className='list__button' id={sensor.id} type='edit'/>
          <IconButton className='list__button' id={sensor.id} type='play'/>
          <IconButton className='list__button' id={sensor.id} type='stop'/>
        </div>
      </div>
      <div className='list__item__bottom'>
        <div className='list__text list__text--main'>
        </div>
        <div className='list__text list__text--main'>
          Created at {sensor.createdAt}
        </div>
      </div>
    </div>
  </div>
)

export default Sensor
