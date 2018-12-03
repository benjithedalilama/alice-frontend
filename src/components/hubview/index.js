import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import Hub from '../hub'
import SensorList from '../sensorlist'
import CodeList from '../codelist'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

export class HubView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    const { hub } = this.props

    return (
      <div className='list__container'>
        <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
        <BreadcrumbsItem to={`/hubs/${hub.id}`}>{hub.id}</BreadcrumbsItem>
        <div className='list'>
          <Hub hub={hub}>
            <div className='list__text--main'>{hub.name}</div>
          </Hub>
          <div className='sublist__container'>
            <SensorList sensors={hub.sensors} parent={hub}></SensorList>
            <CodeList codes={hub.codes} parent={hub}></CodeList>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hub: state.hub.item,
  loading: state.hub.loading,
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(HubView)
