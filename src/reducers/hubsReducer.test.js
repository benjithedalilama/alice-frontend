import reducer from './hubReducer'
import * as types from '../actions/hubActions'

describe('hub reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        "error": null,
        "item": {
          "_id": [],
          "codes": [{
            "_id": [],
            "commands": [{
              "_id": [],
              "action": [],
              "createdAt": [],
              "data": []
            }],
            "createdAt": [],
            "type": []
          }],
          "createdAt": [],
          "deployed": [],
          "name": [],
          "sensors": [{
            "_id": [],
            "createdAt": [],
            "readings": [{
              "_id": [],
              "action": [],
              "createdAt": [],
              "data": []
            }],
            "type": []
          }]},
          "items": [],
          "loading": false}
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
              codes: []
            }]
          }
        }
      )
    ).toEqual(
      {
        "error": null,
        "loading": false,
        "items": [{
          id: 1,
          name: 'Berlin-3',
          deployed:	false,
          createdAt: '20180124',
          sensors: [],
          codes: []
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
