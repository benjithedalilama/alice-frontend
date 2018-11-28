import React from 'react'
import Breadcrumbs from '../breadcrumbs'
import Searchbar from '../searchbar'
import ProfilePreview from '../profilepreview'
import './navbar.css'

const Navbar = props => (
  <div className="navbar">
    <Breadcrumbs className="navbar__element"></Breadcrumbs>
    <Searchbar className="navbar__element navbar__element--centered"></Searchbar>
    <ProfilePreview className="navbar__element">
      {props.children}
    </ProfilePreview>
  </div>
)

export default Navbar
