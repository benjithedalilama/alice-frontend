import React from 'react'
import { goBack } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddCodeView = props => (
  <div className="form__container">
    <div className="form">
      <div className="form__form">
        <input className="form__input form__element" placeholder="Name"></input>
        <input className="form__input form__element" placeholder="Type"></input>
        <button onClick={() => props.goBack()} className="button button--alt form__element">Add Code</button>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  goBack: () => goBack()
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AddCodeView)
