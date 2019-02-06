import React, { Component } from 'react'
import IconButton from '../iconbutton'
import { connect } from 'react-redux'
import { deleteHub } from '../../actions/hubActions'

export class Hub extends Component {

  handleDelete(e, id) {
    e.preventDefault()
    this.props.dispatch(deleteHub(id))
  }

  render () {
    const { hub, children } = this.props

    // This is terrible. Fix it.
    const date = new Date(hub.createdAt)
    const dateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

    return (
      <div className='list__itemContainer' key={hub._id}>
        <div className='list__item'>
          <div className='list__item__top'>
            <div className='list__text'>
              {children}
              <div className='list__text--alt'>{hub._id}</div>
            </div>
            <div className='list__buttons'>
              <IconButton className='list__button' id={hub._id} type='delete' onClick={(e) => this.handleDelete(e, hub._id)}/>
              <IconButton className='list__button' id={hub._id} type='edit'/>
            </div>
          </div>
          <div className='list__item__bottom'>
            <div className='list__text list__text--main'>
              <div>Sensors: {hub.sensors.length}</div>
            </div>
            <div className='list__text list__text--main'>
            <div>Created on {dateString}</div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(Hub)
