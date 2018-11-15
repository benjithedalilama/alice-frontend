import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './breadcrumbs.css'

const Breadcrumbs = props => (
  <div className={'breadcrumbs ' + props.className}>
    <p>BREADCRUMBS</p>
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs)
