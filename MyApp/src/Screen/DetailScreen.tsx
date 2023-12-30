import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = (props) => {
    return (
        <View style={styles.contain}>
            <Text style={styles.mainTxt}>{props}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainTxt: {
        fontSize: 25,
        color: '#000000',
        fontStyle: "italic",
        fontWeight: '900'
    }

})


export default DetailScreen