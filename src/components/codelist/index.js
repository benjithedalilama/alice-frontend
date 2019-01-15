import React from 'react'
import { Link } from 'react-router-dom'
import Code from '../code'
import List from '../list'

const CodeList = (props) => (
  <List className='list__container--small'>
    <div className='list__itemContainer'>
      <div className='list__item'>
        <Link className='list__item__top list__text--main' to={{ pathname: `/hubs/${props.parent._id}/codes`}}>Codes</Link>
      </div>
    </div>
    {props.codes.map(code =>
      <Code code={code}>
        <Link className='list__text--main' to={{ pathname: `/hubs/${props.parent._id}/codes/${code._id}`, code: code}}>{code.name}</Link>
      </Code>
    )}
  </List>
)

export default CodeList
