import { ADD_USER } from '../actions/userActions'

const initialState = {
  users: []
}

function user (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [
          action.payload
        ]
      }
    default:
      return state
  }
}

export default user