import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './searchbar.css'

const Searchbar = props => (
  <div className={props.className + ' searchbar'}>
      <input className="searchbar__input" placeholder="Search"></input>
      <div className="searchbar__searchButton">
        <FontAwesomeIcon className="searchbar__icon" icon={faSearch} />
      </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar)
