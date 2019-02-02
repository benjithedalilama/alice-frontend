import { handleErrors } from '../helpers/responseHelper'
import HubService from '../services/hubService'
import { push } from 'connected-react-router'
export const FETCH_HUB_BEGIN   = 'FETCH_HUB_BEGIN'
export const FETCH_HUB_SUCCESS = 'FETCH_HUB_SUCCESS'
export const FETCH_HUB_FAILURE = 'FETCH_HUB_FAILURE'
export const FETCH_HUBS_BEGIN   = 'FETCH_HUBS_BEGIN'
export const FETCH_HUBS_SUCCESS = 'FETCH_HUBS_SUCCESS'
export const FETCH_HUBS_FAILURE = 'FETCH_HUBS_FAILURE'
export const ADD_HUB_BEGIN = 'ADD_HUB_BEGIN'
export const ADD_HUB_SUCCESS = 'ADD_HUB_SUCCESS'
export const ADD_HUB_FAILURE = 'ADD_HUB_FAILURE'

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
