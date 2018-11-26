import React, { Component } from 'react'
import { connect } from 'react-redux'
import './list.css'

export class List extends Component {
  render() {
    return (
      <div className='listContainer'>
        <div className='list'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(List)
