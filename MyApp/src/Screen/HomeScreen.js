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
import { useDeviceOrientation } from '@react-native-community/hooks'

import AsyncStorage from '@react-native-async-storage/async-storage'  //its Async Await function 
import LottieView from 'lottie-react-native';

import Demoref from '../Component/Demoref';
import { BankData } from '../config/BankDetails'

const HomeScreen = () => {

    const orientation = useDeviceOrientation()
    console.log('orientation is:', orientation)

    const navigation = useNavigation();
    const drawer = useRef(null);

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

                <LottieView style={styles.animConten} source={require('../Asset/Anim/crics.json')} autoPlay loop />

                <Demoref />
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

    },
    animConten: {
        flex: 1
    }
})

export default HomeScreen
