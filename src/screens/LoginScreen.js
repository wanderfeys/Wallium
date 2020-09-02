import React, { useState,useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import FormInput from '../components/FormInput'
import { AuthContext } from '../navigation/AuthProvider'
import { windowHeight } from '../utils/Dimensions'
import Images from '../constants/Images'
import Colors from '../utils/Colors'
import Button from '../components/Buttons'
import Utility from '../utils/Utility'
import String from '../constants/String'
import Loading from '../components/Loading'

export default function LoginScreen( { navigation } ) {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const { login } = useContext(AuthContext)
  const [isLoading,setLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState ('')



  function validateEmailAddress  ()  {
    const isValidEmail = Utility.isEmailValid(email)
    isValidEmail ? setEmailError('') : setEmailError(String.InvalidEmailAdress)
    return isValidEmailm
    }

  function validatePasswordField ()  {
       const isValidField = Utility.isValidField(password)
       isValidField ? setPasswordError('') : setPasswordError(String.PasswordFieldEmpty)
       return isValidField
    }


  function perfomAuth () {
      const  isValidEmail = validateEmailAddress()
      const isValidPassword = validatePasswordField()
      if (isValidEmail && isValidPassword) {
           setEmailError('')
           setPasswordError('')
           setLoading(true)
           login(email,password)
      }
  }
  if (isLoading === true) {
    return (
      <Loading />
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} />
      <Text style={styles.text}> Welcome to Wallium  </Text>
      <FormInput
        error={emailError}
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        color="#219653"
        onValidateEmailField={validateEmailAddress}
      />
      <FormInput
        error={passwordError}
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword (userPassword)}
        secureTextEntry
        color="#219653"
        onValidatePasswordField={validatePasswordField}
      />
      <Button title="Login" onPress={perfomAuth} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={()=> navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}> New user? Join here </Text>
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
    borderColor: Colors.SignGreen,
    borderRadius:10,
    borderWidth: 1,
    marginBottom: 20
  },
    container: {
      backgroundColor: Colors.theme,
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
      color: Colors.SignGreen,
      marginBottom: 40
    }
  })
