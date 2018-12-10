import {
  FETCH_HUBS_BEGIN,
  FETCH_HUBS_SUCCESS,
  FETCH_HUBS_FAILURE
} from '../actions/hubsActions'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function hubsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_HUBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.hubs
      }

    case FETCH_HUBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    default:
      return state
  }
}
