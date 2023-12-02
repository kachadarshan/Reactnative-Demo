import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {

    const [islogin, setIslogin] = useState(false)

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '507551488742-nd66ms0jp082t3btmgtqpdfs1nn60shd.apps.googleusercontent.com',
        })

        auth()
            .signOut()
            .then(() => console.log('User signed out!'));

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

    const checkLogin = () => {
        if (islogin) {
            navigation.navigate("HomeScreen");
        } else {
            console.log("its not navigate to homescreen")
        }
    }

    return (
        <View >
            <Text style={styles.headerTxt}>LoginScreen</Text>
            {/* <Button
                style={styles.marginTop}
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => setIslogin(true))}
            />

            <Button
                title="Home Screen "
                onPress={() => checkLogin()}
                style={styles.marginTop}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,

    },
    headerTxt: {
        fontSize: 20,
        color: "red"
    },
    loginBtn: {
        marginTop: 15
    }
})


export default LoginScreen