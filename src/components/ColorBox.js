import React, { PropTypes } from 'react'
import {
  Button, View, Text, StyleSheet, TouchableWithoutFeedback
} from 'react-native'

const ColorBox = ({color, onClickChangeColor}) => (

  <TouchableWithoutFeedback onPress={onClickChangeColor}>
      <View style={[styles.container, boxStyle(color)]}>
        <Text>
          {color}
        </Text>
      </View>
  </TouchableWithoutFeedback>
)

ColorBox.propTypes = {
  color: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function boxStyle(color) {
  return {
    backgroundColor: color,
  }
}

export default ColorBox