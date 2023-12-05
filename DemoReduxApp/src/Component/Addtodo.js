import React, { useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../Featurs/Todo/Todoslice'
import { useNavigation } from '@react-navigation/native'

const Addtodo = () => {


    const navigation = useNavigation();
    const [isTodo, setisTodo] = useState('')
    const dispatch = useDispatch()

    const addTodoss = () => {
        dispatch(addTodo(isTodo))
        setisTodo('')
    }

    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <View style={styles.viewDir}>
                    <TextInput
                        style={[styles.inputView, styles.inputHolder]}
                        placeholder={"Enter Your Todo"}
                        value={isTodo}
                        onChangeText={(text) => { setisTodo(text) }} />

                    <TouchableOpacity style={styles.addBtn} onPress={() => addTodoss()}>
                        <Text style={styles.addBtnTxt}>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todoContain}>
                    <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Todolist')}>
                        <Text style={styles.addBtnTxt}>List</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    viewDir: {
        flexDirection: "row",
    },
    inputView: {

        height: 60,
        width: "70%",
        padding: 10,
        margin: 10

    },
    inputHolder: {
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 10
    },
    addBtn: {
        height: 60,
        padding: 10,
        margin: 10,
        width: 60,
        backgroundColor: "#1f1f1f",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    addBtnTxt: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    todoContain: {
        width: "95%",
        height: 600,
        marginTop: 100,
        margin: 10
    },
    flaData: {
        height: 50,
        width: "95%",

        color: "#000000"
    },
    listBtn: {
        height: 60,
        padding: 10,
        margin: 10,
        width: "95%",
        backgroundColor: "#1f1f1f",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }

})

export default Addtodo