import React, { Component } from 'react'
import IconButton from '../iconbutton'
import { connect } from 'react-redux'
import { deleteSensor } from '../../actions/sensorActions'

export class Sensor extends Component {

  handleDelete(e, hubId, id) {
    e.preventDefault()
    this.props.dispatch(deleteSensor(hubId, id))
  }

  render () {
    const { sensor, children, hubId } = this.props

    return (
      <div className='list__itemContainer' key={sensor._id}>
        <div className='list__item'>
          <div className='list__item__top'>
            <div className='list__text'>
              {children}
              <div className='list__text--alt'>{sensor._id}</div>
            </div>
            <div className='list__buttons'>
              <IconButton className='list__button' id={sensor._id} type='delete' onClick={(e) => this.handleDelete(e, hubId, sensor._id)}/>
              <IconButton className='list__button' id={sensor._id} type='edit'/>
            </div>
          </div>
          <div className='list__item__bottom'>
            <div className='list__text list__text--main'>
            </div>
            <div className='list__text list__text--main'>
              Created at {sensor.createdAt}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  error: state.hub.error,
  hubId: state.hub.item._id
})

export default connect(
  mapStateToProps
)(Sensor)
