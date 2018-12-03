import React from 'react'

const Command = ({command}) => (
  <div className='list__itemContainer' key={command.id}>
    <div className='list__item'>
      <div className='list__item__top'>
        <div className='list__text'>
          <div className='list__text--main'>{command.action}: {command.data}%</div>
        </div>
        <div className='list__text list__text--main'>
          Created at {command.createdAt}
        </div>
      </div>
    </div>
  </div>
)

export default Command
