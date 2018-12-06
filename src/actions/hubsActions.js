import HubsService from '../services/hubsService'
import {HUBS} from '../fake_data'
import { handleErrors } from '../helpers/responseHelper'
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
  return async dispatch => {
    dispatch(fetchHubsBegin())

    try {
      const hubs = await HubsService.getAll()
      dispatch(fetchHubsSuccess(hubs))
      return hubs
    }
    catch (err) {
      dispatch(fetchHubsFailure(err))
      handleErrors(err)
    }
  }
}
