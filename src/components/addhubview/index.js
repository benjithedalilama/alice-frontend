import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

const AddHubView = props => (
  <div className="form__container">
    <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
    <BreadcrumbsItem to={`/add-hub`}>Add Hub</BreadcrumbsItem>
    <div className="form">
      <form className="form__form">
        <input className="form__input form__element" placeholder="Name"></input>
        <input className="form__input form__element" placeholder="Latitude"></input>
        <input className="form__input form__element" placeholder="Longitude"></input>
        <button onClick={() => props.changePage('/hubs')} className="button button--alt form__element">Add Hub</button>
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
