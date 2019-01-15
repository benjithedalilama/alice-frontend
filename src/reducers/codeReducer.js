import {
  FETCH_CODE_BEGIN,
  FETCH_CODE_SUCCESS,
  FETCH_CODE_FAILURE,
} from '../actions/codeActions'

const initialState = {
  item: {
    _id: [],
    createdAt: [],
    type: [],
    commands: [
      {
        _id: [],
        createdAt: [],
        action: [],
        data: []
      }
    ]
  },
  loading: false,
  error: null
}

export default function codeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CODE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.code
      }

    case FETCH_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {}
      }

    default:
      return state
  }
}
