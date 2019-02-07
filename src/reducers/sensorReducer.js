import {
  ADD_SENSOR_BEGIN,
  ADD_SENSOR_SUCCESS,
  ADD_SENSOR_FAILURE,
  DELETE_SENSOR_BEGIN,
  DELETE_SENSOR_SUCCESS,
  DELETE_SENSOR_FAILURE
} from '../actions/sensorActions'

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

export default function sensorReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_SENSOR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case ADD_SENSOR_SUCCESS:
      var newState = JSON.parse(JSON.stringify(state))
      newState.item.sensors.push(action.payload.sensor)

      return {
        ...newState,
        loading: false,
        error: null,
      }

    case ADD_SENSOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case DELETE_SENSOR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case DELETE_SENSOR_SUCCESS:
      var newState = JSON.parse(JSON.stringify(state))
      newState.item.sensors = state.item.sensors.filter(sensor => sensor._id !== action.payload.id)

      return {
        ...newState,
        loading: false,
        error: null
      }

    case DELETE_SENSOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
