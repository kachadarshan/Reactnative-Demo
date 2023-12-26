import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'

const App = () => {


  return (
    <View style={styles.contain}>
      <Text>App</Text>
      <Image style={styles.imageContainer}
        source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_200_200/0/1684661858007?e=2147483647&v=beta&t=AbILa_W4bLWTjelovbsGZ6c6-q65UPKxHlrbWN0-ATw' }}
      />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam officia, provident veniam, doloribus accusantium ex animi cumque, corporis repudiandae blanditiis facere quaerat expedita fugit et possimus nisi doloremque porro.</Text>
      <View style={styles.maincontainer}>
        <View style={[styles.card, styles.cardRed]}>
          <Text> Red </Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text> Green </Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text> Blue </Text>
        </View>

      </View>

      <View style={[styles.fancycard, styles.cardRed]}>
        <Text> Red </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    margin: responsiveHeight(2),
    borderRadius: responsiveHeight(10),
    borderWidth: 5
  },
  maincontainer: {

    flexDirection: "row"
  },
  card: {
    height: responsiveHeight(10),
    width: responsiveWidth(10),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 8

  },
  cardRed: {
    backgroundColor: "red"
  },
  cardGreen: {
    backgroundColor: "green"
  },
  cardBlue: {
    backgroundColor: "blue"
  },
  cardYellow: {
    backgroundColor: "yellow"
  },
  fancycard: {
    height: responsiveHeight(10),
    width: responsiveWidth(30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 8

  }

})

export default App