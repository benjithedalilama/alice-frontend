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
        <button className="button--main">Sign Up</button>
      </form>
      <p>Forgot password?</p>
      <button onClick={props.changePage} className="button--alt">Login</button>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/login')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
