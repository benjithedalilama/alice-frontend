import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import { Link } from 'react-router-dom'
import Code from '../code'
import List from '../list'

export class CodeListView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    const { codes } = this.props.hub

    return (
      <List>
          {codes.map(code =>
            <Code code={code}>
              <Link className='list__text--main' to={{ pathname: `/hubs/${this.props.match.params.hubId}/codes/${code.id}`, code: code}}>{code.name}</Link>
            </Code>
          )}
      </List>
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
)(CodeListView)
