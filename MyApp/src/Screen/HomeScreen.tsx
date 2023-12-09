import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

    const navigation = useNavigation();

    return (    
        <View>
            <Text>Homeee</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen
