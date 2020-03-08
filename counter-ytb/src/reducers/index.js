import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import isLoggedInReducer from './isLoggedInReducer'

export default combineReducers({
  count: counterReducer,
  loggedIn: isLoggedInReducer
})
