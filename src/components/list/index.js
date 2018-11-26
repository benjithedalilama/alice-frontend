import React from 'react'

const List = (props) => (
  <div className={'list__container ' + props.className}>
    <div className='list'>
      {props.children}
    </div>
  </div>
)

export default List
