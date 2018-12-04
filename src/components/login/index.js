import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../actions/userActions'
import './login.css'

export class Login extends Component {
  constructor(props) {
    super(props)

    this.props.dispatch(logout())

    this.state = {
        username: '',
        password: '',
        submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
      const { name, value } = e.target
      this.setState({ [name]: value })
  }

  handleSubmit(e) {
      e.preventDefault()

      this.setState({ submitted: true })
      const { username, password } = this.state
      const { dispatch } = this.props

      if (username && password) {
          dispatch(login(username, password))
      }
  }

  render () {
    const { username, password } = this.state

    return (
      <div className="form__container">
        <div className="form">
          <form className="form__form" onSubmit={this.handleSubmit} name="form">
            <p className="form__text">Login</p>
            <input className="form__input form__element" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username"></input>
            <input className="form__input form__element" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"></input>
            <button className="button button--main form__element">Login</button>
            <p className="form__text">Forgot password?</p>
            <button className="button button--alt form__element">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
