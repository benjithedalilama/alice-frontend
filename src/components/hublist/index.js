import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHubs } from '../../actions/hubsActions'
import IconButton from '../iconbutton'
import './hublist.css'

class HubList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs } = this.props

    return (
      <div className='hublist'>
        {hubs.map(hub =>
          <div className='hublist__item' key={hub.id}>
            <div className='hublist__item__top'>
              <div className='hublist__text'>
                <div className='hublist__text--main'>{hub.name}</div>
                <div className='hublist__text--alt'>{hub.id}</div>
              </div>
              <div className='hublist__buttons'>
                <IconButton className='hublist__button' id={hub.id} type='delete'/>
                <IconButton className='hublist__button' id={hub.id} type='edit'/>
                <IconButton className='hublist__button' id={hub.id} type='play'/>
                <IconButton className='hublist__button' id={hub.id} type='stop'/>
              </div>
            </div>
            <div className='hublist__item__bottom'>
              <div className='hublist__text hublist__text--main'>
                <div>Sensors: {hub.sensors.length}</div>
              </div>
              <div className='hublist__text hublist__text--main'>
                <div>Created at {hub.createdAt}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hubs: state.hubs.items,
  loading: state.hubs.loading,
  error: state.hubs.error
})

export default connect(
  mapStateToProps
)(HubList)
