import reducer from './codeReducer'
import * as types from '../actions/codeActions'

describe('code reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
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
    )
  })

  it('should handle FETCH_CODE_BEGIN', () => {
    expect(
      reducer({}, {
        type: types.FETCH_CODE_BEGIN,
        text: 'Run the tests'
      })
    ).toEqual(
      {
        "error": null,
        "loading": true
      }
    )
  })

  it('should handle FETCH_CODE_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_CODE_SUCCESS,
        payload:
          {
            code: [
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
        "item": [{
          _id: 1,
          name: 'zoop',
          version: 1.0,
          action: 'setHumidity',
          commands: [],
          createdAt: '20180124'
        }]
      }
    )
  })

  it('should handle FETCH_CODE_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.FETCH_CODE_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
        item: {}
      }
    )
  })
})
