import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
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
  }

  handleChange(e) {
      const { name, value } = e.target
      this.setState({ [name]: value })
  }

  handleSubmit(e) {
      e.preventDefault()

      const { username, password } = this.state
      const { dispatch } = this.props

      dispatch(login(username, password))
  }

  changePage(path) {
    this.props.dispatch(push(path))
  }

  render () {
    const { username, password } = this.state

    return (
      <div className="form__container">
        <div className="form">
          <form className="form__form" onSubmit={e => this.handleSubmit(e)} name="form">
            {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
            <input className="form__input form__element" type="text" name="username" value={username} onChange={e => this.handleChange(e)} placeholder="Username"></input>
            <input className="form__input form__element" type="password" name="password" value={password} onChange={e => this.handleChange(e)} placeholder="Password"></input>
            <button className="button button--main form__element">Login</button>
            <p className="form__text">Forgot password?</p>
            <button className="button button--alt form__element" onClick={e => this.changePage('/signup')}>Sign Up</button>
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
)(Login)
