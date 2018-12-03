import React from 'react'

const Reading = ({reading}) => (
  <div className='list__itemContainer' key={reading.id}>
    <div className='list__item'>
      <div className='list__item__top'>
        <div className='list__text'>
          <div className='list__text--main'>{reading.action}: {reading.data}%</div>
        </div>
        <div className='list__text list__text--main'>
          Created at {reading.createdAt}
        </div>
      </div>
    </div>
  </div>
)

export default Reading
