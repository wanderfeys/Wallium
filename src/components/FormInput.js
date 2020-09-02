import React from 'react'
import { StyleSheet,TextInput,Text,View } from 'react-native'
import { windowHeight,  windowWidth } from '../utils/Dimensions'
import Colors from '../utils/Colors'


export default function FormInput ({ term,error, placeholderText,onValidatePasswordField,onValidateEmailField, ...rest }) {

  return (
    <View>
      <Text style={styles.ErrorText}>{error} </Text>
      <View>
        <TextInput
          value={term}
          style={styles.input}
          numberOflines={1}
          placeholder={placeholderText}
          placeholderTextColor="#EEEEEE"
          onEndEditing={onValidatePasswordField}
          onEndEditingEmail={onValidateEmailField}
          {...rest}
        />
      </View>
    </View>



  )

}
  const styles = StyleSheet.create({
    input: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'white'
    },
    ErrorText: {
      fontSize: 14,
      color: Colors.red,
      marginBottom: 2,
      marginHorizontal:10

  }
  })
