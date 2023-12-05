import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Addtodo from '../Component/Addtodo'
import Todolist from '../Component/Todolist'

import { Store } from '../App/Store'
import { Provider } from 'react-redux'


const HomeScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Addtodo'>
                    <Stack.Screen
                        name='Addtodo'
                        component={Addtodo}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Todolist'
                        component={Todolist}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

    )
}

const styles = StyleSheet.create({})

export default () =>{
    return(
        <Provider store={Store}>
            <HomeScreen/>
        </Provider>
    )
}