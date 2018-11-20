import reducer from './hubsReducer'
import * as types from '../actions/hubsActions'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        "error": null,
        "items": [],
        "loading": false
      }
    )
  })

  it('should handle FETCH_HUBS_BEGIN', () => {
    expect(
      reducer({}, {
        type: types.FETCH_HUBS_BEGIN,
        text: 'Run the tests'
      })
    ).toEqual(
      {
        "error": null,
        "loading": true
      }
    )
  })

  it('should handle FETCH_HUBS_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_HUBS_SUCCESS,
        payload:
          {
            hubs: [{
              id: 1,
              name: 'Berlin-3',
              deployed:	false,
              createdAt: '20180124',
              sensors: [],
              controlCodes: []
            }]
          }
        }
      )
    ).toEqual(
      {
        "loading": false,
        "items": [{
          id: 1,
          name: 'Berlin-3',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          controlCodes: []
        }]
      }
    )
  })

  it('should handle FETCH_HUBS_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.FETCH_HUBS_FAILURE,
        payload: {
          error: new Error('failure')
        }
      })
    ).toEqual(
      {
        "loading": false,
        "error": Error('failure'),
        items: []
      }
    )
  })
})
