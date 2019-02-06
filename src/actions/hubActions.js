import { handleErrors } from '../helpers/responseHelper'
import HubService from '../services/hubService'
import CodeService from '../services/codeService'
import { push } from 'connected-react-router'
export const FETCH_HUB_BEGIN   = 'FETCH_HUB_BEGIN'
export const FETCH_HUB_SUCCESS = 'FETCH_HUB_SUCCESS'
export const FETCH_HUB_FAILURE = 'FETCH_HUB_FAILURE'
export const FETCH_HUBS_BEGIN   = 'FETCH_HUBS_BEGIN'
export const FETCH_HUBS_SUCCESS = 'FETCH_HUBS_SUCCESS'
export const FETCH_HUBS_FAILURE = 'FETCH_HUBS_FAILURE'
export const SEARCH_HUBS_BEGIN   = 'SEARCH_HUBS_BEGIN'
export const SEARCH_HUBS_SUCCESS = 'SEARCH_HUBS_SUCCESS'
export const SEARCH_HUBS_FAILURE = 'SEARCH_HUBS_FAILURE'
export const ADD_HUB_BEGIN = 'ADD_HUB_BEGIN'
export const ADD_HUB_SUCCESS = 'ADD_HUB_SUCCESS'
export const ADD_HUB_FAILURE = 'ADD_HUB_FAILURE'
export const DELETE_HUB_BEGIN   = 'DELETE_HUB_BEGIN'
export const DELETE_HUB_SUCCESS = 'DELETE_HUB_SUCCESS'
export const DELETE_HUB_FAILURE = 'DELETE_HUB_FAILURE'
export const ADD_CODE_BEGIN = 'ADD_CODE_BEGIN'
export const ADD_CODE_SUCCESS = 'ADD_CODE_SUCCESS'
export const ADD_CODE_FAILURE = 'ADD_CODE_FAILURE'
export const DELETE_CODE_BEGIN   = 'DELETE_CODE_BEGIN'
export const DELETE_CODE_SUCCESS = 'DELETE_CODE_SUCCESS'
export const DELETE_CODE_FAILURE = 'DELETE_CODE_FAILURE'


export const fetchHubBegin = () => ({
  type: FETCH_HUB_BEGIN
})

export const fetchHubSuccess = hub => ({
  type: FETCH_HUB_SUCCESS,
  payload: { hub }
})

export const fetchHubFailure = error => ({
  type: FETCH_HUB_FAILURE,
  payload: { error }
})

export const fetchHub = (id) => {
  return async dispatch => {
    dispatch(fetchHubBegin())

    try {
      const hub = await HubService.getById(id)
      dispatch(fetchHubSuccess(hub))
      return hub
    }
    catch (err) {
      dispatch(fetchHubFailure(err))
      handleErrors(err)
    }
  }
}

export const fetchHubsBegin = () => ({
  type: FETCH_HUBS_BEGIN
})

export const fetchHubsSuccess = hubs => ({
  type: FETCH_HUBS_SUCCESS,
  payload: { hubs }
})

export const fetchHubsFailure = error => ({
  type: FETCH_HUBS_FAILURE,
  payload: { error }
})

export const fetchHubs = () => {
  return async dispatch => {
    dispatch(fetchHubsBegin())

    try {
      const hubs = await HubService.getAll()
      dispatch(fetchHubsSuccess(hubs))
      return hubs
    }
    catch (err) {
      dispatch(fetchHubsFailure(err))
      handleErrors(err)
    }
  }
}

export const searchHubsBegin = () => ({
  type: SEARCH_HUBS_BEGIN
})

export const searchHubsSuccess = hubs => ({
  type: SEARCH_HUBS_SUCCESS,
  payload: { hubs }
})

export const searchHubsFailure = error => ({
  type: SEARCH_HUBS_FAILURE,
  payload: { error }
})

export const searchHubs = (query) => {
  return async dispatch => {
    dispatch(searchHubsBegin())

    try {
      // Optimize this to pull from hubs we already have. Takes 36 ms every time
      const hubs = await HubService.getAll()

      // Not the best way, but running into problems with undefined using filter
      let results = []
      hubs.forEach( hub => {
        if (typeof hub.name === "undefined") { return }
        if (hub.name.toLowerCase().includes(query.toLowerCase())) { results.push(hub) }
      })

      dispatch(searchHubsSuccess(results))
      return results
    }
    catch (err) {
      dispatch(searchHubsFailure(err))
      handleErrors(err)
    }
  }
}

export const addHubBegin = () => ({
  type: ADD_HUB_BEGIN
})

export const addHubSuccess = hub => ({
  type: ADD_HUB_SUCCESS,
  payload: { hub }
})

export const addHubFailure = error => ({
  type: ADD_HUB_FAILURE,
  payload: { error }
})

export const addHub = (name, lat, long) => {
  return async dispatch => {
    dispatch(addHubBegin())

    try {
      if (!name || !lat || !long) throw Error('Please enter all fields')
      if (isNaN(lat) || isNaN(long)) throw Error('Please enter valid location values')

      const hub = await HubService.create({name: name, location: [lat, long]})
      dispatch(addHubSuccess(hub))
      dispatch(push(`/hubs/${hub._id}`))
      return hub
    }
    catch (err) {
      dispatch(addHubFailure(err))
      handleErrors(err)
    }
  }
}

export const deleteHubBegin = () => ({
  type: DELETE_HUB_BEGIN
})

export const deleteHubSuccess = (id) => ({
  type: DELETE_HUB_SUCCESS,
  payload: { id }
})

export const deleteHubFailure = error => ({
  type: DELETE_HUB_FAILURE,
  payload: { error }
})

export const deleteHub = id => {
  return async dispatch => {
    dispatch(deleteHubBegin())

    try {
      await HubService._delete(id)
      dispatch(push(`/hubs`))
      dispatch(deleteHubSuccess(id))
      return {}
    }
    catch (err) {
      dispatch(deleteHubFailure(err))
      handleErrors(err)
    }
  }
}

export const deleteCodeBegin = () => ({
  type: DELETE_CODE_BEGIN
})

export const deleteCodeSuccess = (hubId, id) => ({
  type: DELETE_CODE_SUCCESS,
  payload: { hubId, id }
})

export const deleteCodeFailure = error => ({
  type: DELETE_CODE_FAILURE,
  payload: { error }
})

export const deleteCode = (hubId, id) => {
  return async dispatch => {
    dispatch(deleteCodeBegin())

    try {
      await CodeService._delete(hubId, id)
      dispatch(push(`/hubs/${hubId}`))
      dispatch(deleteCodeSuccess(hubId, id))
      return {}
    }
    catch (err) {
      dispatch(deleteCodeFailure(err))
      handleErrors(err)
    }
  }
}
