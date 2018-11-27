import React from 'react'
import IconButton from '../iconbutton'

const Code = ({code, children}) => (
  <div className='list__itemContainer' key={code.id}>
    <div className='list__item'>
      <div className='list__item__top'>
        <div className='list__text'>
          {children}
          <div className='list__text--alt'>{code.id}</div>
        </div>
        <div className='list__buttons'>
          <IconButton className='list__button' id={code.id} type='delete'/>
          <IconButton className='list__button' id={code.id} type='edit'/>
        </div>
      </div>
      <div className='list__item__bottom'>
        <div className='list__text list__text--main'>
        </div>
        <div className='list__text list__text--main'>
          Created at {code.createdAt}
        </div>
      </div>
    </div>
  </div>
)

export default Code
