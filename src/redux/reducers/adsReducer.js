import { FETCH_ADS_REQUEST, FETCH_ADS_SUCCESS, FETCH_ADS_ERROR } from '../actions/adsActions'

const initialState = {
  ads: [],
  isFetching: false,
  error: null
}

function ads (state = initialState, action) {
  switch (action.type) {
    case FETCH_ADS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_ADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ads: action.payload.ads
      }

    case FETCH_ADS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default ads