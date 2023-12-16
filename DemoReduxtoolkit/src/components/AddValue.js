import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

//for send data to store 
import { useDispatch } from 'react-redux'
import { increment } from '../Features/CounterReducedr/CounterSlice' //this action increment value of store 


const AddValue = () => {

    const dispatch = useDispatch();

    const incrData = () => {
        dispatch(increment())
    }
    return (
        <View style={styles.contain}>
            <View style={styles.btncontauiner}>
                <TouchableOpacity style={styles.incrBtn} onPress={incrData}>
                    <Text style={styles.incrBtntxt}>Increment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    btncontauiner: {
        alignItems: 'flex-end',
        height: 60,
        width: "95%",
        margin: 10
    },
    incrBtn: {
        height: 50,
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center'
    },
    incrBtntxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414'
    }
})

export default AddValue