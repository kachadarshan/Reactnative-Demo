import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screen
import HomeScreen from './Screen/HomeScreen'
import DataaddScreen from './Screen/DataaddScreen'
import DataupdateScreen from './Screen/DataupdateScreen'


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='DataaddScreen'
          component={DataaddScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='DataupdateScreen'
          component={DataupdateScreen}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({


})

export default App