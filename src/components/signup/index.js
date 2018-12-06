import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { register } from '../../actions/userActions'

export class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
        username: '',
        password: '',
        confirmPassword: ''
    }
  }

  handleChange(e) {
      const { name, value } = e.target
      this.setState({ [name]: value })
  }

  handleSubmit(e) {
      e.preventDefault()
      const { username, password, confirmPassword } = this.state
      this.props.dispatch(register(username, password, confirmPassword))
  }

  changePage(path) {
    this.props.dispatch(push(path))
  }

  render () {
    const { username, password, confirmPassword } = this.state

    return (
      <div className="form__container">
        <div className="form">
          <form className="form__form" onSubmit={e => this.handleSubmit(e)} name="form">
            {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
            <input className="form__input form__element" type="text" name="username" value={username} onChange={e => this.handleChange(e)} placeholder="Username"></input>
            <input className="form__input form__element" type="password" name="password" value={password} onChange={e => this.handleChange(e)} placeholder="Password"></input>
            <input className="form__input form__element" type="password" name="confirmPassword" value={confirmPassword} onChange={e => this.handleChange(e)} placeholder="Confirm Password"></input>
            <button className="button button--main form__element">Sign Up</button>
            <p className="form__text">Already have an account?</p>
            <button onClick={() => this.changePage('/login')} className="button button--alt form__element">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.user.error
})

export default connect(
  mapStateToProps
)(Signup)
