import { HUBS } from '../fake_data'
import { handleErrors } from './hubsActions'
export const FETCH_HUB_BEGIN   = 'FETCH_HUB_BEGIN'
export const FETCH_HUB_SUCCESS = 'FETCH_HUB_SUCCESS'
export const FETCH_HUB_FAILURE = 'FETCH_HUB_FAILURE'

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
  return dispatch => {
    dispatch(fetchHubBegin())

    try {
      // get all hubs
      const hubs = HUBS
      // get hub by id API call
      const hub = hubs.find(k => k.id === parseInt(id, 10))
      dispatch(fetchHubSuccess(hub))
      return hub
    }
    catch (err) {
      dispatch(fetchHubFailure(err))
      handleErrors(err)
    }
  }
}
