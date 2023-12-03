import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { openDatabase } from 'react-native-sqlite-storage'

//this is for name of database
let db = openDatabase({ name: 'Userform2.db' });

const DataaddScreen = () => {

    const navigation = useNavigation();
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isCity, setIsCity] = useState('');


    //this is for first time create table of database
    useEffect(() => {
        db.transaction(
            (txn) => {
                txn.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user' ",
                    [],
                    (tx, response) => {
                        console.log('iteam:', response.rows.length);
                        if (response.rows.length == 0) {
                            txn.executeSql("DROP TABLE IF EXISTS table_user", []); //this is for table drop if exists 
                            txn.executeSql('CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT,user_name VARCHAR,user_email VARCHAR,user_city VARCHAR)'
                                , [])
                        }
                    }
                )
            });
    }, [])


    //data insert methdos 

    const dataAdd = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'INSERT INTO table_user (user_name,user_email,user_city) VALUES (?,?,?)',
                [isName,isEmail,isCity],
                (tx, response) => {
                    console.log(response.rowsAffected)
                    if (response.rowsAffected>0) {
                        navigation.navigate("HomeScreen")
                    }
                }

            )
        })
    }


    return (
        <SafeAreaView style={styles.contain}>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>DataaddScreen</Text>
            </View>

            <View style={styles.formContaine}>
                <TextInput
                    style={[styles.TextInput]}
                    onChangeText={(name) => setIsName(name)}
                    placeholder="Enter Name" />

                <TextInput
                    style={[styles.TextInput]}
                    onChangeText={(email) => setIsEmail(email)}
                    placeholder="Enter Email" />

                <TextInput
                    style={[styles.TextInput]}
                    onChangeText={(city) => setIsCity(city)}
                    placeholder="Enter City" />


            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.addBtn} onPress={() => dataAdd()}>
                    <Text style={styles.addBtntxt} >Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTxt: {
        fontSize: 30,
        color: "#e31705"
    },
    formContaine: {
        marginTop: 10,

    },
    TextInput: {
        height: 50,
        width: 310,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    addBtn: {
        height: 40,
        width: 150,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: "#e31705",

        justifyContent: "center",
        alignItems: "center"
    },
    addBtntxt: {
        fontSize: 25,
        fontWeight: "500",
        color: "white"
    }


})

export default DataaddScreen