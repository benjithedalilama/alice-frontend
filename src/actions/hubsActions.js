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
      // const hubs = await fetch("/hubs")
      const hubs = [
        {
          id: 1,
          name: 'Berlin-3',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          controlCodes: []
        },
        {
          id: 2,
          name: 'Munich-3',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          controlCodes: []
        },
        {
          id: 3,
          name: 'Paris-3',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          controlCodes: []
        },
        {
          id: 4,
          name: 'Paris-2',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          controlCodes: []
        }
      ]
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
