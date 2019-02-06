import { authHeader } from '../helpers/authHelper'
import { getCookie } from '../helpers/cookieHelper'

const url = 'http://localhost:8080/api'

class SensorService {
  static async getAll(hubId) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/sensors`, requestOptions)
      const parsed = await response.json()
      return parsed.sensors
    }
    catch (err) {
      throw err
    }
  }

  static async getById(hubId, id) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/sensors/${id}`, requestOptions)
      const parsed = await response.json()
      return parsed.sensor
    }
    catch (err) {
      throw err
    }
  }

  static async create(hubId, sensor) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sensor }),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/sensors`, requestOptions)
      return response
    }
    catch (err) {
      throw err
    }
  }

  static async update(hubId, sensor) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ sensor }),
        credentials: 'include'
      }

      const updatedSensor = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/sensors/${sensor._id}`, requestOptions)
      return updatedSensor
    }
    catch (err) {
      throw err
    }
  }

  static async _delete(hubId, id) {
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        credentials: 'include'
      }

      await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/sensors/${id}`, requestOptions)
    }
    catch (err) {
      throw err
    }
  }
}


export default SensorService
