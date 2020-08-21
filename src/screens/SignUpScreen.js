import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        value={nickname}
        placeholderText='Name'
        onChangeText={userNickname => setNickname(userNickname)}
        color='white'
      />
      <FormInput
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
        color='white'
      />
      <FormInput
        value={password}
        placeholderText='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
        color='white'
      />

      <FormButton
        buttonTitle='Signup'
        onPress={() => register(email, password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121111',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white'
  }
});
