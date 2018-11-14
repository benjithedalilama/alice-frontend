import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './signup.css'

const SignUp = props => (
  <div>
    <div className="auth">
      <p className="login__header">Sign Up</p>
      <form className="login__form">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input placeholder="Confirm Password"></input>
        <button onClick={() => props.changePage('/hubs')}className="button--main">Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <button onClick={() => props.changePage('/login')} className="button--alt">Login</button>
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
)(SignUp)
