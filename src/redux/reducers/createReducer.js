import { FETCH_CRADS_REQUEST, FETCH_CRADS_SUCCESS, FETCH_CRADS_ERROR } from '../actions/createActions'

const initialState = {
  adverts: [],
  isFetching: false,
  error: null
}

function adverts (state = initialState, action) {
  switch (action.type) {
    case FETCH_CRADS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_CRADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        adverts: action.payload.adverts
      }

    case FETCH_CRADS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default adverts