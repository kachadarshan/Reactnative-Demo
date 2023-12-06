import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker';


const ImagePicker = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };


    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(imageUri);
            }
        });
    }



    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        {selectedImage && (
             <Image
               source={{ uri: selectedImage }}
               style={{ flex: 1 }}
               resizeMode="contain"
             />
       )}
       <View style={{ marginTop: 20 }}>
         <Button title="Choose from Device" onPress={openImagePicker} />
       </View>
       <View style={{ marginTop: 20,marginBottom: 50 }}>
         <Button title="Open Camera" onPress={handleCameraLaunch} />
       </View>
     </View>
    )
}

const styles = StyleSheet.create({


})

export default ImagePicker