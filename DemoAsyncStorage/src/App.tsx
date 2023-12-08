import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {
  // const [isuserName, setisuserName] = useState('')

  const userone_Details = {
    id: 1,
    name: 'Dax Kacha',
    email: 'darshan@meta.com',
    position: 'Software Dev'
  }

  const setData = async () => {
    try {
      await AsyncStorage.setItem('Details', JSON.stringify(userone_Details))
    } catch (error) {
      console.warn(error)
    }
  }

  const getData = async () => {
    try {
      const user_name = await AsyncStorage.getItem('Details')
      // setisuserName(user_name)
      console.log(user_name)
    } catch (error) {
      console.warn(error)
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('Name')
      // setisuserName('')
    } catch (error) {
      console.warn(error)
    }
  }


  return (
    <View>
      <Text>Demo of Async Storage</Text>

      <View style={styles.btngetData}>
        <Button title='Set Data' color={"green"} onPress={() => setData()} />
      </View>

      <View style={styles.btngetData}>
        <Button title='Get Data' color={"red"} onPress={getData} />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>

        <Text style={{ fontSize: 25 }}>Demo</Text>
      </View>

      <View style={styles.btngetData}>
        <Button title='Remove Data' color={"orange"} onPress={removeData} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btngetData: {
    margin: 10,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "red"
  }
})

export default App