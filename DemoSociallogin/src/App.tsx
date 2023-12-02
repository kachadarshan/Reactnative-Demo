import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Component/Screen/LoginScreen';
import HomeScreen from './Component/Screen/HomeScreen';



const App = () => {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false }} />

          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false }} />
            
        </Stack.Navigator>
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({


})

export default App