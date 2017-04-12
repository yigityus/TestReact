import { combineReducers } from 'redux'
import { CHANGE_COLOR } from '../actions'

function color(state = {color: '#4AB7A2'}, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {...state, color: randomColor()}

    default:
      return {...state}
  }
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default color

