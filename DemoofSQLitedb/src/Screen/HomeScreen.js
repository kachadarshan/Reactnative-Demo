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
        getData();
    }, [useIsFocused()])

    //this is for get Data
    const getData = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, response) => {
                    let temp = [];
                    for (let i = 0; i < response.rows.length; i++) {
                        temp.push(response.rows.item(i))
                        // console.log(response.rows.item(i))
                    }
                    setIsdata(temp);
                }
            )
        })
    }


    //this for delete data
    const DeleteData = (props) => {
        db.transaction((txn) => {
            txn.executeSql('DELETE FROM table_user WHERE user_id=?',
                [props],
                (tx, response) => {
                    if (response.rowsAffected > 0) {
                        // useIsFocused();
                        // navigation.navigate('HomeScreen')
                        getData();
                    }
                })
        })
    }

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
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.dataCard}>
                                    <Text style={styles.dataTxt}>{item.user_name}</Text>
                                    <Text style={styles.dataTxt}>{item.user_email}</Text>
                                    <Text style={styles.dataTxt}>{item.user_city}</Text>

                                    <View style={styles.updeletebtn}>
                                        <TouchableOpacity style={styles.addBtn} onPress={ () => { navigation.navigate('DataupdateScreen' , {
                                            user_id:item.user_id,
                                            user_name:item.user_name,
                                            user_email:item.user_email,
                                            user_city:item.user_city,
                                        })
                                        }} >
                                            <Text style={styles.addBtntxt} >Update</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[styles.addBtn, styles.deleteBtn]} onPress={() => DeleteData(item.user_id)} >
                                            <Text style={styles.addBtntxt} >Delete</Text>
                                        </TouchableOpacity>
                                    </View>
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
        height: 160,
        width: "95%",
        borderRadius: 5,
        backgroundColor: "#faf7f0",
        padding: 10,
        margin: 10

    },
    dataTxt: {
        fontSize: 20,
        color: "#000000"
    },
    updeletebtn: {
        flexDirection: "row",
        height: 50,
        marginBottom: 5
    },
    deleteBtn: {
        marginLeft: 10
    }
})

export default HomeScreen
