import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './login.css'

const Login = props => (
  <div>
    <div className="auth">
      <p className="auth__header">Login</p>
      <form className="auth__form">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <button onClick={() => props.changePage('/hubs')} className="button button--main">Login</button>
      </form>
      <p>Forgot password?</p>
      <button onClick={() => props.changePage('/signup')} className="button button--alt">Sign Up</button>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (destination) => push(destination)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
