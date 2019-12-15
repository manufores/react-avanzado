import { FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS, FETCH_TAGS_ERROR } from '../actions/tagsActions'

const initialState = {
  tags: [],
  isFetching: false,
  error: null
}

function tags (state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tags: action.payload.tags
      }

    case FETCH_TAGS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default tags