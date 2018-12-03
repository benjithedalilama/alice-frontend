import React from 'react'

const List = (props) => (
  <div className={`${props.className} list__container`}>
    <div className='list'>
      {props.children}
    </div>
  </div>
)

export default List
