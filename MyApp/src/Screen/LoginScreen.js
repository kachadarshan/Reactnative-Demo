import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import Snackbar from 'react-native-snackbar'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {

    const [isName, setisName] = useState('')
    const [isEmail, setisEmail] = useState('')

    const navigation = useNavigation();

    const dataObj = {
        name: isName,
        email: isEmail
    }

    const setData = async () => {
        if (isName === '' && isEmail === '') {
            Snackbar.show({
                text: 'Please Fill The Details',
                duration: Snackbar.LENGTH_SHORT,
            });
        } else {
            await AsyncStorage.setItem('Name', isName);
            await AsyncStorage.setItem('Email', isEmail);
            setisName('')
            setisEmail('')
            navigation.navigate('HomeScreen')
        }

    }

    return (
        <View style={styles.contain}>
            <View style={styles.inputBox}>
                <TextInput
                    onChangeText={(text) => setisName(text)}
                    keyboardType={'default'}
                    value={isName}
                    placeholder='Enter Your Name'

                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    onChangeText={(text) => setisEmail(text)}
                    keyboardType={'default'}
                    value={isEmail}
                    placeholder='Enter Your Email' />
            </View>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => setData()} >
                <Text style={styles.btnSubmitTxt}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: '95%',
        height: 60,
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 2,
        marginBottom: 5,
        justifyContent: 'center',
        padding: 2

    },
    btnSubmit: {
        width: '95%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#498efc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSubmitTxt: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: "500"
    }
})



export default LoginScreen
