import React from 'react'
// import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './hubs.css'

const Hubs = props => (
  <div>
    <h1>Hubs</h1>
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hubs)
