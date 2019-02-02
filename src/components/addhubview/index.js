import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { addHub } from '../../actions/hubActions'

export class AddHubView extends Component {
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        latitude: '',
        longitude: ''
    }
  }

  handleChange(e) {
      const { name, value } = e.target
      this.setState({ [name]: value })
  }

  handleSubmit(e) {
      e.preventDefault()
      const { name, latitude, longitude } = this.state
      this.props.dispatch(addHub(name, latitude, longitude))
  }

  render () {
    const { name, latitude, longitude } = this.state

    return (
      <div className="form__container">
        <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
        <BreadcrumbsItem to={`/add-hub`}>Add Hub</BreadcrumbsItem>
        <div className="form">
          <form className="form__form" onSubmit={e => this.handleSubmit(e)} name="form">
            {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
            <input className="form__input form__element" name="name" value={name} onChange={e => this.handleChange(e)} placeholder="Name"></input>
            <input className="form__input form__element" name="latitude" value={latitude} onChange={e => this.handleChange(e)} placeholder="Latitude"></input>
            <input className="form__input form__element" name="longitude" value={longitude} onChange={e => this.handleChange(e)} placeholder="Longitude"></input>
            <button className="button button--alt form__element">Add Hub</button>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(AddHubView)
