import React from 'react'
import {
  AppRegistry, Text, View
} from 'react-native'

import { Provider } from 'react-redux'
import VisibleColorBox from './src/containers/VisibleColorBox'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


let store = createStore(reducers,
    applyMiddleware(logger)
)

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

const TestReact = () => (
    <Provider store={store}>
      <VisibleColorBox/>
    </Provider>
)

AppRegistry.registerComponent('TestReact', () => TestReact)