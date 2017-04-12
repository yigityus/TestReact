import { connect } from 'react-redux'
import ColorBox from '../components/ColorBox'
import {changeColor} from '../actions'

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickChangeColor: () => {
      changeColor: dispatch(changeColor(randomColor()))
    }
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

const VisibleColorBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorBox)

export default VisibleColorBox