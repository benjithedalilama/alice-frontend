import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hub from '../hub'
import SensorList from '../sensorlist'

export class HubView extends Component {
  render() {
    const { hub } = this.props.location
    // const sensors = hub.sensors
    // const controlCodes = hub.controlCodes

    return (
      <div className='list__container'>
        <div className='list'>
          <Hub hub={hub}>
            <div className='list__text--main'>{hub.name}</div>
          </Hub>
          <SensorList sensors={hub.sensors}></SensorList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(HubView)
