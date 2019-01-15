import { handleErrors } from '../helpers/responseHelper'
import HubService from '../services/hubService'
export const FETCH_HUB_BEGIN   = 'FETCH_HUB_BEGIN'
export const FETCH_HUB_SUCCESS = 'FETCH_HUB_SUCCESS'
export const FETCH_HUB_FAILURE = 'FETCH_HUB_FAILURE'
export const FETCH_HUBS_BEGIN   = 'FETCH_HUBS_BEGIN'
export const FETCH_HUBS_SUCCESS = 'FETCH_HUBS_SUCCESS'
export const FETCH_HUBS_FAILURE = 'FETCH_HUBS_FAILURE'

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
