import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import { useSelector } from 'react-redux'


const Todolist = () => {

    const todos =useSelector( (state) => state.todos)
    console.log(todos)

    return (
        <View style={styles.contain}>
            <FlatList
                data={todos}
                keyExtractor={item => item.index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.flatData}>
                            <Text style={styles.flatDataTxt}>
                                {item.text}
                            </Text>
                        </View>
                    )
                }}
            />

            {/* {TODOLIST.map(({user}) => <Text>{user.text}</Text>)} */}

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {

    },
    flatData: {
        width: "95%",
        height: 60,
        margin: 10,
    },
    flatDataTxt: {
        fontSize: 25,
        color: "#000000"
    }

})

export default Todolist