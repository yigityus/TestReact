import { combineReducers } from 'redux'
import { CHANGE_COLOR } from '../actions'

function color(state = {color: '#4AB7A2'}, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {...state, color: action.color}

    default:
      return {...state}
  }
}
const rootReducer = combineReducers({
  color
})

export default color

