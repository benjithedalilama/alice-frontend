import { handleErrors } from '../helpers/responseHelper'
import { push } from 'connected-react-router'
import SensorService from '../services/sensorService'
export const ADD_SENSOR_BEGIN = 'ADD_SENSOR_BEGIN'
export const ADD_SENSOR_SUCCESS = 'ADD_SENSOR_SUCCESS'
export const ADD_SENSOR_FAILURE = 'ADD_SENSOR_FAILURE'
export const DELETE_SENSOR_BEGIN   = 'DELETE_SENSOR_BEGIN'
export const DELETE_SENSOR_SUCCESS = 'DELETE_SENSOR_SUCCESS'
export const DELETE_SENSOR_FAILURE = 'DELETE_SENSOR_FAILURE'

export const deleteSensorBegin = () => ({
  type: DELETE_SENSOR_BEGIN
})

export const deleteSensorSuccess = (hubId, id) => ({
  type: DELETE_SENSOR_SUCCESS,
  payload: { hubId, id }
})

export const deleteSensorFailure = error => ({
  type: DELETE_SENSOR_FAILURE,
  payload: { error }
})

export const deleteSensor = (hubId, id) => {
  return async dispatch => {
    dispatch(deleteSensorBegin())

    try {
      await SensorService._delete(hubId, id)
      dispatch(push(`/hubs/${hubId}`))
      dispatch(deleteSensorSuccess(hubId, id))
      return {}
    }
    catch (err) {
      dispatch(deleteSensorFailure(err))
      handleErrors(err)
    }
  }
}

export const addSensorBegin = () => ({
  type: ADD_SENSOR_BEGIN
})

export const addSensorSuccess = (sensor) => ({
  type: ADD_SENSOR_SUCCESS,
  payload: { sensor }
})

export const addSensorFailure = error => ({
  type: ADD_SENSOR_FAILURE,
  payload: { error }
})

export const addSensor = (hubId, name, action) => {
  return async dispatch => {
    dispatch(addSensorBegin())

    try {
      if (!name || !action) throw Error('Please enter all fields')

      const sensor = await SensorService.create(hubId, {name, action})
      dispatch(addSensorSuccess(sensor))
      dispatch(push(`/hubs/${hubId}`))
      return sensor
    }
    catch (err) {
      dispatch(addSensorFailure(err))
      handleErrors(err)
    }
  }
}
