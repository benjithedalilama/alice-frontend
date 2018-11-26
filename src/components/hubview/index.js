import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hub from '../hub'
import SensorList from '../sensorlist'
import CodeList from '../codelist'

export class HubView extends Component {
  render() {
    const { hub } = this.props.location

    return (
      <div className='list__container'>
        <div className='list'>
          <Hub hub={hub}>
            <div className='list__text--main'>{hub.name}</div>
          </Hub>
          <div className='sublist__container'>
            <SensorList sensors={hub.sensors}></SensorList>
            <CodeList codes={hub.controlCodes}></CodeList>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(HubView)
