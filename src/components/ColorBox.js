import React, { PropTypes } from 'react'

const ColorBox = ({color, onClickChangeColor}) => (
    <View>
      <Button
          onPress={onClickChangeColor}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      <Text>
        {color}
      </Text>
    </View>
)
