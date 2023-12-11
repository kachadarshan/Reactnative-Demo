import React from 'react'
import {
  StyleSheet
  , Text,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './Screen/SplashScreen'
import HomeScreen from './Screen/HomeScreen'
import LoginScreen from './Screen/LoginScreen'


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{headerShown: false}} />




      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})

export default App