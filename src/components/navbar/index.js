import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Breadcrumbs from '../breadcrumbs'
import Searchbar from '../searchbar'
import './navbar.css'

const Navbar = props => (
  <div className="navbar">
    <Breadcrumbs className="navbar__element"></Breadcrumbs>
    <Searchbar className="navbar__element"></Searchbar>
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
