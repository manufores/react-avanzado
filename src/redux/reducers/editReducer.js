import { FETCH_EDADS_REQUEST, FETCH_EDADS_SUCCESS, FETCH_EDADS_ERROR } from '../actions/editActions'

const initialState = {
  adverts: [],
  isFetching: false,
  error: null
}

function editAdverts (state = initialState, action) {
  switch (action.type) {
    case FETCH_EDADS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_EDADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        adverts: action.payload.adverts
      }

    case FETCH_EDADS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default editAdverts