import { HUBS } from '../fake_data'
export const FETCH_HUBS_BEGIN   = 'FETCH_HUBS_BEGIN'
export const FETCH_HUBS_SUCCESS = 'FETCH_HUBS_SUCCESS'
export const FETCH_HUBS_FAILURE = 'FETCH_HUBS_FAILURE'

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
  return dispatch => {
    dispatch(fetchHubsBegin())

    try {
      // get hubs API call
      const hubs = HUBS
      dispatch(fetchHubsSuccess(hubs))
      return hubs
    }
    catch (err) {
      dispatch(fetchHubsFailure(err))
      handleErrors(err)
    }
  }
}

export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
