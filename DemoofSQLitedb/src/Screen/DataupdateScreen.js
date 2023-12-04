import React,{useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import { useNavigation } from '@react-navigation/native'

let db = openDatabase({ name: 'Userform2.db' });

const DataupdateScreen = ({ route}) => {

    // const  id  = route.params.user_id;
    // const  name  = route.params.user_name;
    // const  email =route.params.user_email;
    // const  city =route.params.user_c

    const navigation = useNavigation();

    const [isUserid, setIsuserid] = useState(route.params.user_id);
    const [isUsername, setIsusername] = useState(route.params.user_name);
    const [isUseremail, setIsuseremail] = useState(route.params.user_email);
    const [isUsercity, setIsusercity] = useState(route.params.user_city);

    const getDataupdate = () => {
        db.transaction((txn) =>{
            txn.executeSql('UPDATE table_user set user_name=?, user_email=?, user_city=? where user_id=?'
            ,[isUsername,isUseremail,isUsercity,isUserid]
            ,(tx,response)=>{
                if (response.rowsAffected>0) {
                    navigation.navigate('HomeScreen')
                    console.log("Data Suceesfully Updated")
                }
            })
        })
    }

    return (
        <SafeAreaView style={styles.contain}>

            <View style={styles.formContaine}>
                <TextInput
                    style={[styles.TextInput]}
                    value={isUsername}
                    onChangeText={(name) => setIsusername(name)}
                    placeholder="Enter Name" />

                <TextInput
                    style={[styles.TextInput]}
                    value={isUseremail}
                    onChangeText={(email) => setIsuseremail(email)}
                    placeholder="Enter Email" />

                <TextInput
                    style={[styles.TextInput]}
                    value={isUsercity}
                    onChangeText={(city) => setIsusercity(city)}
                    placeholder="Enter City" />


            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.addBtn} onPress={() => getDataupdate()}>
                    <Text style={styles.addBtntxt} >Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain:{
        flex:1
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

export default DataupdateScreen
