import CodesService from '../services/codeService'
import { handleErrors } from '../helpers/responseHelper'
export const FETCH_CODES_BEGIN   = 'FETCH_CODES_BEGIN'
export const FETCH_CODES_SUCCESS = 'FETCH_CODES_SUCCESS'
export const FETCH_CODES_FAILURE = 'FETCH_CODES_FAILURE'

export const fetchCodesBegin = () => ({
  type: FETCH_CODES_BEGIN
})

export const fetchCodesSuccess = code => ({
  type: FETCH_CODES_SUCCESS,
  payload: { code }
})

export const fetchCodesFailure = error => ({
  type: FETCH_CODES_FAILURE,
  payload: { error }
})

export const fetchCodes = (hubId, id) => {
  return dispatch => {
    dispatch(fetchCodesBegin())

    try {
      // get all codes
      const codes = CodeService.getAll(hubId)
      // get code by id API call
      // need to change ._id to ._id when action uses codes service
      const code = codes.find(code => code._id === parseInt(id, 10))
      dispatch(fetchCodesSuccess(code))
      return code
    }
    catch (err) {
      dispatch(fetchCodesFailure(err))
      handleErrors(err)
    }
  }
}
