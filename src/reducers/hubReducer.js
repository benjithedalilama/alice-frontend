import {
  FETCH_HUB_BEGIN,
  FETCH_HUB_SUCCESS,
  FETCH_HUB_FAILURE,
  FETCH_HUBS_BEGIN,
  FETCH_HUBS_SUCCESS,
  FETCH_HUBS_FAILURE
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
        name: [],
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
        name: [],
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

    default:
      return state
  }
}
