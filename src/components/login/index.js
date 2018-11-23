import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './login.css'

const Login = props => (
  <div className="form__container">
    <div className="form">
      <form className="form__form">
        <p className="form__text">Login</p>
        <input className="form__input" placeholder="Email"></input>
        <input className="form__input" placeholder="Password"></input>
        <button onClick={() => props.changePage('/hubs')} className="button button--main">Login</button>
        <p className="form__text">Forgot password?</p>
        <button onClick={() => props.changePage('/signup')} className="button button--alt">Sign Up</button>
      </form>
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
