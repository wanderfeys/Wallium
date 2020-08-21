import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import {windowHeight} from '../utils/Dimensions'
import Images from '../constants/Images'

export default function LoginScreen( {navigation} ) {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const {login} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo}></Image>
      <Text style={ styles.text}> Welcome to Wallium  </Text>
      <FormInput
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
        color='#219653'
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword (userPassword)}
        secureTextEntry={true}
        color = '#219653'
      />
      <FormButton buttonTitle='Login' onPress={() => login(email, password)} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={()=> navigation.navigate('Signup')}
      >
        <Text style= { styles.navButtonText}> New user? Join here </Text>
     </TouchableOpacity>

    </View>

  )


}



  const styles = StyleSheet.create({
    logo:{
    alignSelf: 'center',
    margin: 0.002 * windowHeight,
    height: 300,
    width: 290,
    borderColor: '#219653',
    borderRadius:10,
    borderWidth: 1,
    marginBottom: 20
  },
    container: {
      backgroundColor: '#121111',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 34,
      marginBottom: 30,
      color: 'white'
    } ,
    navButton: {
      marginBottom: 20
    },
    navButtonText: {
      fontSize: 20,
      color: '#219653',
      marginBottom: 40
    }
  });
