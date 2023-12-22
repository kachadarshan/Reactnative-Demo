import React, { useState, useRef, useEffect } from 'react'
import {
    DrawerLayoutAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'  //its Async Await function 


const HomeScreen = () => {

    const BankData = [
        {
            id: 1,
            name: 'SBI',
            phoneno: '123456789',
            email: 'sbi@test.com',
            logo: "https://w7.pngwing.com/pngs/190/639/png-transparent-state-bank-of-india-thane-branch-banking-in-india-bank-blue-text-branch-thumbnail.png"
        },
        {
            id: 2,
            name: 'KOTAK',
            phoneno: '123456789',
            email: 'kotak@test.com',
            logo: 'https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269'
        },
        {
            id: 3,
            name: 'HDFC',
            phoneno: '123456789',
            email: 'hdfc@test.com',
            logo: "https://startinup.up.gov.in/wp-content/uploads/2022/12/hdfc-logo.png"
        },
        {
            id: 4,
            name: 'ICICI',
            phoneno: '123456789',
            email: 'icici@test.com',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFV1rGmie-WZdJxKilLAXQHVxD4BkP7bIxgH-nhaVbA&s'
        },
        {
            id: 5,
            name: 'BOB',
            phoneno: '123456789',
            email: 'bob@test.com',
            logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
        },
        {
            id: 6,
            name: 'YES',
            phoneno: '123456789',
            email: 'yes@test.com',
            logo: 'https://bfsi.eletsonline.com/wp-content/uploads/2023/05/YES-BANK.jpg'
        },
        {
            id: 7,
            name: 'SBI',
            phoneno: '123456789',
            email: 'sbi@test.com',
            logo: "https://w7.pngwing.com/pngs/190/639/png-transparent-state-bank-of-india-thane-branch-banking-in-india-bank-blue-text-branch-thumbnail.png"
        },
        {
            id: 8,
            name: 'KOTAK',
            phoneno: '123456789',
            email: 'kotak@test.com',
            logo: 'https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269'
        },
        {
            id: 9,
            name: 'HDFC',
            phoneno: '123456789',
            email: 'hdfc@test.com',
            logo: "https://startinup.up.gov.in/wp-content/uploads/2022/12/hdfc-logo.png"
        },
        {
            id: 10,
            name: 'ICICI',
            phoneno: '123456789',
            email: 'icici@test.com',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFV1rGmie-WZdJxKilLAXQHVxD4BkP7bIxgH-nhaVbA&s'
        },
        {
            id: 11,
            name: 'BOB',
            phoneno: '123456789',
            email: 'bob@test.com',
            logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
        },
        {
            id: 12,
            name: 'YES',
            phoneno: '123456789',
            email: 'yes@test.com',
            logo: 'https://bfsi.eletsonline.com/wp-content/uploads/2023/05/YES-BANK.jpg'
        }
    ]


    const navigation = useNavigation();
    const drawer = useRef(null);

    const [drawerPosition, setDrawerPosition] = useState('left');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')



    useEffect(() => {
        Getdata()
    }, [])

    const Getdata = async () => {
        const isName = await AsyncStorage.getItem('Name');
        const isEmail = await AsyncStorage.getItem('Email');
        setName(isName)
        setEmail(isEmail)
    }

    const DrawerView = () => (
        <View style={styles.drawerContain}>
            <View style={styles.drawerCard}>
                <View style={styles.drawerCardd}>
                    <Text style={styles.drawerTxt}>{name}</Text>
                    <Text style={styles.drawerTxt}>{email}</Text>
                </View>

                {/* <Text>{details.email}</Text> */}
            </View>
        </View>
    );

    // const DrawerOpClose = () => {
    //     drawer.current.openDrawer()
    // }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            renderNavigationView={DrawerView}
            drawerWidth={300}
            drawerPosition='left'
        >

            <View style={styles.contain}>
                <View style={styles.headerToolbar}>
                    <View style={styles.headerToolbaricon}>
                        <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                            <Image
                                style={{ width: 30, height: 40, }}
                                source={require('../Asset/menu.png')}

                            />


                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerToolbarTxtcontain}>
                        <Text style={{ fontSize: 25, color: "#000000" }}>HomeScreen</Text>
                    </View>
                </View>

                <FlatList
                    data={BankData}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
                            <View style={styles.flatcard} >
                                <View>
                                    <Image
                                        style={{ width: 100, height: 110, borderRadius: 30 }}
                                        source={{ uri: item.logo }}
                                        resizeMethod='auto'
                                    />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 22, color: "#000000" }}>{item.name}</Text>
                                    <Text style={{ fontSize: 18, color: "#000000" }}>{item.email}</Text>
                                    <Text style={{ fontSize: 16, color: "#000000" }}>{item.phoneno}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id} />

            </View>
        </DrawerLayoutAndroid>


    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    drawerContain: {
        flex: 1,
        backgroundColor: '#3eacfa'
    },
    drawerCard: {
        height: 200,
        width: "100%",
        backgroundColor: "#86fa50",

        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10

    },
    drawerCardd: {
        marginLeft: 30
    },
    cardTxtName: {
        fontSize: 25,
        color: '#000000',
        fontStyle: 'italic'
    },
    drawerTxt: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000'
    },
    headerToolbar: {
        height: 60,
        width: '100%',

        flexDirection: 'row',
        backgroundColor: '#fafafa'
    },
    headerToolbaricon: {
        height: 20,
        width: 25,
        margin: 10
    },
    headerToolbarTxtcontain: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatcard: {
        height: 200,
        width: "95%",
        margin: 10,
        padding: 10,

        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#fcd9d9',
        borderRadius: 20,
        flexDirection: 'row'

    }
})

export default HomeScreen
