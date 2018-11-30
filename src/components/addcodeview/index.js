import React from 'react'
import { goBack } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddCodeView = props => (
  <div className="form__container">
    <div className="form">
      <div className="form__form">
        <input className="form__input" placeholder="Name"></input>
        <input className="form__input" placeholder="Type"></input>
        <button onClick={() => props.goBack()} className="button button--alt">Add Code</button>
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  goBack: () => goBack()
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCodeView)
