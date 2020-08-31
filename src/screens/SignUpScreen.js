import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import Colors from '../utils/Colors'
import Button from '../components/Buttons'
import Utility from '../utils/Utility'
import String from '../constants/String'
import Loading from '../components/Loading';



export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState ('')
  const [isLoading,setLoading] = useState(false)






    function validateEmailAddress  ()  {
      const isValidEmail = Utility.isEmailValid(email)
      isValidEmail ? setEmailError('') : setEmailError(String.InvalidEmailAdress)
      return isValidEmail
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
             register(email,password)
        }
    }
    if (isLoading === true) {
      return (
        <Loading />
      )
    }



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        error={emailError}
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
        color={Colors.SignGreen}
        onValidateEmailField={validateEmailAddress}
      />
      <FormInput
        error={passwordError}
        value={password}
        placeholderText='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
        color={Colors.SignGreen}
        onValidatePasswordField={validatePasswordField}
      />

      <Button title='Register' onPress={perfomAuth} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.theme,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    fontSize: 24,
    marginBottom: 22,
    color: Colors.white
  }
});
