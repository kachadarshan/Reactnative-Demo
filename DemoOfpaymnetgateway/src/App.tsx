import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';


const App = () => {


  const handlePayment = () => {

    let options = {
      description: 'This is My demo',
      image: 'https://media.licdn.com/dms/image/D4D03AQFxd1PQCKFN2w/profile-displayphoto-shrink_200_200/0/1684661858007?e=2147483647&v=beta&t=AbILa_W4bLWTjelovbsGZ6c6-q65UPKxHlrbWN0-ATw',
      currency: 'INR',
      key: '', //this is privacy so removed but its mandotry to fill its generate on razorpay dashboard
      amount: '100',
      name: 'Darshan kacha int',
      order_id: '',//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'xyz@example.com',
        contact: '9191919191',
        name: 'xyz'
      },
      theme: { color: '#53a20e' }
    }

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      // alert();
      console.warn(`Success: ${data.razorpay_payment_id}`)
    }).catch((error) => {
      // handle failure
      // alert();
      console.warn(`Error: ${error.code} | ${error.description}`)
    });
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>App</Text>
      </View>


      <TouchableOpacity style={styles.paymentBtn} onPress={handlePayment}>
        <Text style={styles.paymentBtnTxt}>Payment</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    marginTop: 25

  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '900',
    color: 'red'
  },
  paymentBtn: {
    width: '80%',
    height: 45,
    marginTop: 100,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute'
  },
  paymentBtnTxt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }

})

export default App