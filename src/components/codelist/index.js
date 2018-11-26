import React from 'react'
import { Link } from 'react-router-dom'
import Code from '../code'
import List from '../list'

const CodeList = ({codes}) => (
  <List className='list__container--small'>
    <div className='list__itemContainer'>
      <div className='list__item'>
        <div className='list__item__top list__text'>Codes</div>
      </div>
    </div>
    {codes.map(code =>
      <Code code={code}>
        <Link className='list__text--main' to={{ pathname: '/codes/' + code.id, code: code }}>{code.name}</Link>
      </Code>
    )}
  </List>
)

export default CodeList
