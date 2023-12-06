import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Button,
  FlatList,
  Image
} from 'react-native'
import Permission from './Component/Permission'
import { CameraRoll, PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import ImagePicker from './Component/ImagePicker';


const App = () => {

  const [isPhoto, setisPhoto] = useState<PhotoIdentifier[]>([])

  const _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 90,
      assetType: 'Photos',
    })
      .then(r => {
        setisPhoto(r.edges);
      })
      .catch((err) => {
        //Error Loading Images
      });
  }

  return (

    <SafeAreaView>
      <View>
        <Text>Gallery</Text>
        <ImagePicker />
        {/* <Permission />

        <Button title="Load Images" onPress={_handleButtonPress} />

        <FlatList
          numColumns={3}
          data={isPhoto}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Image
                  source={{ uri: item.node.image.uri }}
                  style={styles.image}
                />
                <Text style={styles.title}>{item.node.image.filepath}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.node.id}
        /> */}
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginTop: 4
  },
  title: {
    fontSize: 15,
    color: "#000000"
  }
})

export default App