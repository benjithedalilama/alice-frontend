import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Breadcrumbs from '../breadcrumbs'
import Searchbar from '../searchbar'
import ProfilePreview from '../profilepreview'
import './navbar.css'

const Navbar = props => (
  <div className="navbar">
    <Breadcrumbs className="navbar__element"></Breadcrumbs>
    <Searchbar className="navbar__element navbar__element--centered"></Searchbar>
    <ProfilePreview className="navbar__element">
      <button onClick={() => props.changePage('/add-hub')} className="button button--alt">ADD HUB</button>
    </ProfilePreview>
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (destination) => push(destination)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
