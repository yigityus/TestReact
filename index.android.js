/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Provider from "react-redux/src/components/Provider";
import { createStore } from 'redux'

// const store = configureStore();

export const CHANGE_COLOR = 'CHANGE_COLOR'

// action creator
export function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color
  }
}

export const boundChangeColor = (color) => dispatch(changeColor(color))


const initialState = {
  color: '#123456'
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return Object.assign({}, state, {
        color: action.color
      })
    default:
      return state
  }
}

let store = createStore(reducer)


export default class TestReact extends Component {
  render() {

    console.log(store.getState())

    let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    )

    store.dispatch(changeColor('#111111'))

    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
              {store.getState().color}
            </Text>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestReact', () => TestReact);
