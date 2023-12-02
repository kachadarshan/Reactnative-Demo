import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation();

    const Logout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.log(e);
        }
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={styles.contain}>
            <Text>HomeScreen</Text>

            <TouchableOpacity style={styles.logoutBtn} onPress={() => Logout()}>
                <Text style={styles.logoutBtntxt}>
                    Logout
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
    logoutBtn: {
        height: 40,
        width: "95%",
        backgroundColor: "#387aff",
        margin: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    logoutBtntxt: {
        fontSize: 20,
        color: "white",
        fontWeight: "500"
    }
})

export default HomeScreen