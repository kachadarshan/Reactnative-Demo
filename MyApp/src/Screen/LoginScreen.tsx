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


const LoginScreen = () => {

    const [isName, setisName] = useState('')
    const [isEmail, setisEmail] = useState('')

    const dataObj = {
        name: isName,
        email: isEmail
    }

    const setData = async () => {
        if (isName === null && isEmail === null) {
            Snackbar.show({
                text: 'Please Fill The Details',
                duration: Snackbar.LENGTH_SHORT,
            });
        } else {
            AsyncStorage.setItem('Details',JSON.stringify(dataObj));
        }
        
    }

    return (
        <View style={styles.contain}>
            <View>
                <TextInput
                    onChangeText={(text) => setisName(text)}
                    keyboardType={'default'}
                    placeholder='Enter Your Name'
                    style={styles.inputBox}
                />
                <TextInput
                    onChangeText={(text) => setisName(text)}
                    keyboardType={'default'}
                    style={styles.inputBox}
                    placeholder='Enter Your Email'

                />

                <TouchableOpacity style={styles.btnSubmit} >
                    <Text style={styles.btnSubmitTxt}>Submit</Text>
                </TouchableOpacity>

            </View>
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
        height: 50,
        borderRadius: 10,
        padding: 10,
        margin: 10,
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
