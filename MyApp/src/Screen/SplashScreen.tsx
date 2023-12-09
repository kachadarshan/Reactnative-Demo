import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const SplashScreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
        Splash()
    }, [])

    const Splash = () => {
        setTimeout(() => {
            navigation.navigate('LoginScreen')
        }, 3000);
    }
    return (
        <View style={styles.contain}>
            <StatusBar backgroundColor={"#288cfc"} />

            <Image source={require('../Asset/Logo/logo.png')}
                style={styles.logoContain}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#288cfc"
    },
    logoContain: {
        height: 200,
        width: 200,
        borderRadius: 30,

    }
})

export default SplashScreen