import {
  FETCH_HUB_BEGIN,
  FETCH_HUB_SUCCESS,
  FETCH_HUB_FAILURE
} from '../actions/hubActions'

const initialState = {
  item: {
    id: [],
    name: [],
    deployed:	[],
    createdAt: [],
    sensors: [],
    controlCodes: []
  },
  loading: false,
  error: null
}

export default function hubReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUB_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_HUB_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.hub
      }

    case FETCH_HUB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: null
      }

    default:
      return state
  }
}
