import React, { Component } from 'react'
import { goBack } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { addCode } from '../../actions/codeActions'

export class AddCodeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        action: ''
    }
  }

  handleChange(e) {
      const { name, value } = e.target
      this.setState({ [name]: value })
  }

  handleSubmit(e) {
      e.preventDefault()
      const { name, action } = this.state
      this.props.dispatch(addCode(this.props.match.params.hubId, name, action))
  }

  render () {
    const { name, action } = this.state

    return (
      <div className="form__container">
        <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${this.props.match.params.hubId}`}>{this.props.match.params.hubId}</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${this.props.match.params.hubId}/add-code`}>Add Code</BreadcrumbsItem>
        <div className="form">
          <form className="form__form" onSubmit={(e) => this.handleSubmit(e)} name="form">
            {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
            <input className="form__input form__element" name="name" value={name} onChange={e => this.handleChange(e)} placeholder="Name"></input>
            <input className="form__input form__element" name="action" value={action} onChange={e => this.handleChange(e)} placeholder="Action"></input>
            <button className="button button--alt form__element">Add Code</button>
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
)(AddCodeView)
