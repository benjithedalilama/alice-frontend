import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHubs } from '../../actions/hubsActions'
import IconButton from '../iconbutton'
import { Link } from "react-router-dom"
import './hublist.css'

export class HubList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs } = this.props

    return (
      <div className='listContainer'>
        <div className='list'>
          {hubs.map(hub =>
            <div className='list__itemContainer' key={hub.id}>
              <div className='list__item'>
                <div className='list__item__top'>
                  <div className='list__text'>
                    <Link className='list__text--main' to={{ pathname: '/hubs/' + hub.id, hub: hub }} hub={hub}>{hub.name}</Link>
                    <div className='list__text--alt'>{hub.id}</div>
                  </div>
                  <div className='list__buttons'>
                    <IconButton className='list__button' id={hub.id} type='delete'/>
                    <IconButton className='list__button' id={hub.id} type='edit'/>
                    <IconButton className='list__button' id={hub.id} type='play'/>
                    <IconButton className='list__button' id={hub.id} type='stop'/>
                  </div>
                </div>
                <div className='list__item__bottom'>
                  <div className='list__text list__text--main'>
                    <div>Sensors: {hub.sensors.length}</div>
                  </div>
                  <div className='list__text list__text--main'>
                    <div>Created at {hub.createdAt}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
