import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../login/login.css'

const Signup = props => (
  <div className="form__container">
    <div className="form">
      <form className="form__form">
        <p className="form__text">Sign Up</p>
        <input className="form__input" placeholder="Email"></input>
        <input className="form__input" placeholder="Password"></input>
        <input className="form__input" placeholder="Confirm Password"></input>
        <button onClick={() => props.changePage('/hubs')} className="button button--main">Sign Up</button>
        <p className="form__text">Already have an account?</p>
        <button onClick={() => props.changePage('/login')} className="button button--alt">Login</button>
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
)(Signup)
