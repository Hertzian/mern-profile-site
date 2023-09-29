import { combineReducers } from "redux"
import alertReducer from "./alertReducer"
import userReducer from "./userReducer"

export default combineReducers({
  alerts: alertReducer,
  user: userReducer
})