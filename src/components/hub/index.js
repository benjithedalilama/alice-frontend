import React, { Component } from 'react'
import { connect } from 'react-redux'
import IconButton from '../iconbutton'

export class Hub extends Component {

  render() {
    const { hub } = this.props
    const { match } = this.props

    return (
      <div>{hub.id}</div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(Hub)
