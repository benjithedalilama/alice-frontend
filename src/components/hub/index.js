import React from 'react'
import IconButton from '../iconbutton'

const Hub = ({hub, children}) => (
  <div className='list__itemContainer' key={hub.id}>
    <div className='list__item'>
      <div className='list__item__top'>
        <div className='list__text'>
          {children}
          <div className='list__text--alt'>{hub.id}</div>
        </div>
        <div className='list__buttons'>
          <IconButton className='list__button' id={hub.id} type='delete'/>
          <IconButton className='list__button' id={hub.id} type='edit'/>
          <IconButton className='list__button' id={hub.id} type='play'/>
          <IconButton className='list__button' id={hub.id} type='stop'/>
        </div>
      </div>
      <div className='list__item__bottom'>
        <div className='list__text list__text--main'>
          <div>Sensors: {hub.sensors.length}</div>
        </div>
        <div className='list__text list__text--main'>
          <div>Created at {hub.createdAt}</div>
        </div>
      </div>
    </div>
  </div>
)

export default Hub
