import React, { useState, useCallback } from 'react'
import {
    RefreshControl,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native'

const DetailScreen = (props) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//   export default App;

//     return (
//         <View style={styles.contain}>
//                 <Text style={styles.mainTxt}>{props}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     mainTxt: {
//         fontSize: 25,
//         color: '#000000',
//         fontStyle: "italic",
//         fontWeight: '900'
//     }

// })


export default DetailScreen