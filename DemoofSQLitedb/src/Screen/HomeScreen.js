import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import { useIsFocused } from '@react-navigation/native';


let db = openDatabase({ name: 'Userform2.db' });

const HomeScreen = ({ navigation }) => {

    //this is for store retrive data
    let [isdata, setIsdata] = useState([]);

    //this is for data retrive in sql 
    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, response) => {
                    let temp = [];
                    for (let i = 0; i < response.rows.length; i++) {
                        temp.push(response.rows.item(i))
                        console.log(response.rows.item(i))
                    }
                    setIsdata(temp);
                }
            )
        })
    }, [useIsFocused()])

    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Data Enter Screen</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("DataaddScreen")}>
                        <Text style={styles.addBtntxt} >Add Data</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dataContainer}>
                    <FlatList
                        data={isdata}
                        renderItem={({item, index}) => {
                            return (
                                <View style={styles.dataCard}>
                                    <Text style={styles.dataTxt}>{item.user_name}</Text>
                                    <Text style={styles.dataTxt}>{item.user_email}</Text>
                                    <Text style={styles.dataTxt}>{item.user_city}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 40


    },
    headerTxt: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#e31705",

    },
    addBtn: {
        height: 40,
        width: 120,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: "#e31705",

        justifyContent: "center",
        alignItems: "center"
    },
    addBtntxt: {
        fontSize: 25,
        fontWeight: "500"
    },
    dataContainer: {
        marginTop: 20,
        backgroundColor: "#f7d67c",
        height: 600,
        marginTop: 80
    },
    dataCard: {
        height: 110,
        width: "95%",
        borderRadius: 5,
        backgroundColor: "#faf7f0",
        padding: 10,
        margin: 10

    },
    dataTxt: {
        fontSize: 20,
        color: "#000000"
    }
})

export default HomeScreen
