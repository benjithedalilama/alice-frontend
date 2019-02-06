import {
  FETCH_HUB_BEGIN,
  FETCH_HUB_SUCCESS,
  FETCH_HUB_FAILURE,
  FETCH_HUBS_BEGIN,
  FETCH_HUBS_SUCCESS,
  FETCH_HUBS_FAILURE,
  SEARCH_HUBS_BEGIN,
  SEARCH_HUBS_SUCCESS,
  SEARCH_HUBS_FAILURE,
  ADD_HUB_BEGIN,
  ADD_HUB_SUCCESS,
  ADD_HUB_FAILURE,
  DELETE_HUB_BEGIN,
  DELETE_HUB_SUCCESS,
  DELETE_HUB_FAILURE,
  DELETE_CODE_BEGIN,
  DELETE_CODE_SUCCESS,
  DELETE_CODE_FAILURE
} from '../actions/hubActions'

const initialState = {
  item: {
    _id: [],
    name: [],
    deployed:	[],
    createdAt: [],
    sensors: [
      {
        _id: [],
        createdAt: [],
        type: [],
        readings: [
          {
            _id: [],
            createdAt: [],
            action: [],
            data: []
          }
        ]
      }
    ],
    codes: [
      {
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
      }
    ]
  },
  items: [],
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
        item: {}
      }

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

    case SEARCH_HUBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case SEARCH_HUBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        filteredItems: action.payload.hubs
      }

    case SEARCH_HUBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        filteredItems: []
      }

    case ADD_HUB_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case ADD_HUB_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.hub
      }

    case ADD_HUB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: []
      }

    case DELETE_HUB_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case DELETE_HUB_SUCCESS:
      var newState = JSON.parse(JSON.stringify(state))
      newState.items = state.items.filter(hub => hub._id !== action.payload.id)

      return {
        ...newState,
        loading: false,
        error: null,
        item: []
      }

    case DELETE_HUB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: []
      }

    case DELETE_CODE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case DELETE_CODE_SUCCESS:
      var newState = JSON.parse(JSON.stringify(state))
      newState.item.codes = state.item.codes.filter(code => code._id !== action.payload.id)

      return {
        ...newState,
        loading: false,
        error: null
      }

    case DELETE_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
