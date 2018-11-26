import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddHubView = props => (
  <div className="form__container">
    <div className="form">
      <form className="form__form">
        <input className="form__input" placeholder="Name"></input>
        <input className="form__input" placeholder="Latitude"></input>
        <input className="form__input" placeholder="Longitude"></input>
        <button onClick={() => props.changePage('/hubs')} className="button button--alt">Add Hub</button>
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
)(AddHubView)
