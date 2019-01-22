import reducer from './userReducer'
import * as types from '../actions/userActions'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        user: null,
        loading: false,
        loggedIn: false,
        error: null
      }
    )
  })

  it('should handle LOGIN_USER_BEGIN', () => {
    expect(
      reducer({}, {
        type: types.LOGIN_USER_BEGIN,
        text: 'Run the tests'
      })
    ).toEqual(
      {
        "error": null,
        "loading": true
      }
    )
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.LOGIN_USER_SUCCESS,
        payload:
          {
            user: [
              {
                _id: 1,
                name: 'zoop',
                version: 1.0,
                action: 'setHumidity',
                commands: [],
                createdAt: '20180124'
              }
            ]
          }
        }
      )
    ).toEqual(
      {
        "error": null,
        "loading": false,
        "loggedIn": true,
        "user": [{
          "_id": 1,
          "action": "setHumidity",
          "commands": [],
          "createdAt": "20180124",
          "name": "zoop",
          "version": 1
        }]
      }
    )
  })

  it('should handle LOGIN_USER_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.LOGIN_USER_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
        user: {}
      }
    )
  })

  it('should handle REGISTER_USER_BEGIN', () => {
    expect(
      reducer({}, {
        type: types.REGISTER_USER_BEGIN,
        text: 'Run the tests'
      })
    ).toEqual(
      {
        "error": null,
        "loading": true
      }
    )
  })

  it('should handle REGISTER_USER_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.REGISTER_USER_SUCCESS,
        payload:
          {
            user: [
              {
                _id: 1,
                name: 'zoop',
                version: 1.0,
                action: 'setHumidity',
                commands: [],
                createdAt: '20180124'
              }
            ]
          }
        }
      )
    ).toEqual(
      {
        "error": null,
        "loading": false,
        "user": [{
          "_id": 1,
          "action": "setHumidity",
          "commands": [],
          "createdAt": "20180124",
          "name": "zoop",
          "version": 1
        }]
      }
    )
  })

  it('should handle REGISTER_USER_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.REGISTER_USER_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
        user: {}
      }
    )
  })

  it('should handle LOGOUT_USER_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.LOGOUT_USER_SUCCESS,
        payload:
          {
            user: [
              {
                _id: 1,
                name: 'zoop',
                version: 1.0,
                action: 'setHumidity',
                commands: [],
                createdAt: '20180124'
              }
            ]
          }
        }
      )
    ).toEqual(
      {
        "error": null,
        "loading": false,
        "loggedIn": false
      }
    )
  })

  it('should handle LOGOUT_USER_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.LOGOUT_USER_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
      }
    )
  })

  it('should handle DELETE_USER_BEGIN', () => {
    expect(
      reducer({}, {
        type: types.DELETE_USER_BEGIN,
        text: 'Run the tests'
      })
    ).toEqual(
      {
        "error": null,
        "loading": true
      }
    )
  })

  it('should handle DELETE_USER_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.DELETE_USER_SUCCESS,
        payload:
          {
            user: [
              {
                _id: 1,
                name: 'zoop',
                version: 1.0,
                action: 'setHumidity',
                commands: [],
                createdAt: '20180124'
              }
            ]
          }
        }
      )
    ).toEqual(
      {
        "error": null,
        "loading": false,
        "user": {}
      }
    )
  })

  it('should handle DELETE_USER_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.DELETE_USER_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
        user: {}
      }
    )
  })
})
