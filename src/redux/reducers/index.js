import { combineReducers } from 'redux'
import user from './userReducer'
import tagR from './tagsReducer'
import ads from './adsReducer'
import create from './createReducer'
import edit from './editReducer'

export default combineReducers({
  user,
  tagR,
  ads,
  create,
  edit
})