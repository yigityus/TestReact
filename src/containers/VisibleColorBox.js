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
    onClickChangeColor: (color) => {
      changeColor: dispatch(changeColor(color))
    }
  }
}


const VisibleColorBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorBox)

export default VisibleColorBox