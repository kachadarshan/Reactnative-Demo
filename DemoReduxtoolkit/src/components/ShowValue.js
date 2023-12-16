import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const ShowValue = () => {
    const [isValue, setisValue] = useState('')

    const value = useSelector(vale => vale.value)

    return (
        <View style={styles.contain}>
            <Text style={styles.containTxt}>you touched button {value} times</Text>
        </View>
    )
}

export default ShowValue

const styles = StyleSheet.create({
    contain: {
        alignItems: 'center'
    },
    containTxt: {
        fontSize: 18,
        color: 'red'
    }
})