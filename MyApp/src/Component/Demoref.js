import React, { useRef, useState } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'


const Demoref = () => {

    const [name, setName] = useState();
    const textRef = useRef();

    const focusChangetxt = () => {
        textRef.current.focus();
    }

    const resetChangetxt = () => {
        textRef.current.clear();
        setName()
    }


    return (
        <View style={styles.contain}>
            <Text>Demoref</Text>
            <TextInput
                ref={textRef}
                onChangeText={(text) => setName(text)}
            />

            <Text>this is focused change text:- {name}</Text>

            <Button title='Focus Change' onPress={focusChangetxt} />
            <View style={{ marginTop: 10 }}>
                <Button title='reset Change' onPress={resetChangetxt} />

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1
    }
})

export default Demoref
