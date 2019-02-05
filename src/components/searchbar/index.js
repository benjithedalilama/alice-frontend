import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { searchHubs } from '../../actions/hubActions'
import './searchbar.css'

export class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
        query: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })

    this.props.dispatch(searchHubs(value))
  }

  handleSubmit(e) {
    e.preventDefault()
    const { query } = this.state
    this.props.dispatch(push('/hubs'))
    this.props.dispatch(searchHubs(query))
  }

  render () {
    const { query } = this.state

    return (
      <div className={`${this.props.className} searchbar`}>
        <form className='searchbar__form' onSubmit={e => this.handleSubmit(e)}>
          <input className="searchbar__input" value={query} onChange={e => this.handleChange(e)} name="query" placeholder="Search hubs"></input>
        </form>
        <div className="searchbar__searchButton">
          <FontAwesomeIcon className="searchbar__icon" icon={['fas', 'search']} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({})

export default connect(
  mapStateToProps
)(Searchbar)
