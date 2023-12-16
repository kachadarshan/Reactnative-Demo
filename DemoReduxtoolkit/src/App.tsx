import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import AddValue from './components/AddValue'
import ShowValue from './components/ShowValue'

import { Provider } from 'react-redux'
import { store } from './App/Store'



const App = () => {

  return (
    <Provider store={store}>
      <View style={styles.contain}>
        <AddValue />
        <ShowValue />
      </View>

    </Provider>




  )
}


const styles = StyleSheet.create({
  contain: {
    flex: 1,

  },
  headerTxt: {
    fontSize: 25,
    fontWeight: "bold"
  }
})

export default App
