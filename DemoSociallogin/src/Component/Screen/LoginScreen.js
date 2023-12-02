import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '507551488742-nd66ms0jp082t3btmgtqpdfs1nn60shd.apps.googleusercontent.com',
        })

    }, [])


    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }


    return (
        <View style={styles.contain}>
            <Text >LoginScreen</Text>

            <TouchableOpacity style={styles.loginBtn} onPress={() => onGoogleButtonPress().then(() => navigation.navigate("HomeScreen"))}>
                <Text style={styles.loginBtntxt}>
                    Login
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    headerTxt: {
        fontSize: 20,
        color: "red"
    },
    loginBtn: {
        height: 40,
        width: "95%",
        backgroundColor: "#387aff",
        margin: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    loginBtntxt: {
        fontSize: 20,
        color: "white",
        fontWeight: "500"
    }


})


export default LoginScreen