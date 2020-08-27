import React from 'react'
import {StyleSheet,TouchableOpacity, Text} from 'react-native'
import {windowHeight,  windowWidth} from '../utils/Dimensions'
import { Button } from 'react-native-paper';

export default function ({buttonTitle, ...rest}) {

  return (
    <Button style = { styles.buttonContainer} {...rest}>
      <Text style = {styles.buttonText}>{buttonTitle} </Text>
    </Button>

  )

}



const styles = StyleSheet.create({
  buttonContainer: {
     marginBottom: 70,
     width: windowWidth / 2,
     height: windowHeight /15,
     padding: 10,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 8,
     backgroundColor: "#35089e"
  },
  buttonText: {
     fontSize: 18,
     color: '#219653'


  }



})
