import React, {useEffect} from 'react'
import {StyleSheet,View, Text, Image} from 'react-native'
import Colors from '../utils/Colors'
import {windowHeight} from '../utils/Dimensions'
import auth from '@react-native-firebase/auth'
import Images from '../constants/Images'



export default function SplashScreen ({navigation}) {

    useEffect(() => {
      NavigateToAuthScreen()
    },[navigation])


    function NavigateToAuthScreen () {
      const {currentUser} = auth()
      setTimeout(function () {
        if(currentUser != null) {
          navigation.reset({
              index: 0,
              routes: [{name: 'Home'}]
          })
        }else {
          navigation.reset({
            index: 0,
            routes: [{name:'Login'}]
          })
        }


      }, 1000)


    }


return (
  <View style = {styles.container}>
    <Image style={styles.logo} source={Images.logo}></Image>
  </View>

)
}
const styles = StyleSheet.create({
    logo: {
      alignSelf: 'center',
      margin: 0.04 * windowHeight,
      borderColor: Colors.SignGreen,
      borderRadius:10,
      borderWidth: 1,
    },
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.theme

    }


})
