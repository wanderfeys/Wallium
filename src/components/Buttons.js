import React from 'react'
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, View } from 'react-native'
import Colors from '../utils/Colors'

const Button = (props) => {
  const { title= 'Enter', style= {}, textStyle= {}, onPress, isLoading }= props

  const loader = () => {
    return (
      <ActivityIndicator animating={isLoading} />


    )
  }

  const button = () => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}> {props.title}  </Text>
      </TouchableOpacity>
    )

  }

  return (
    <View style={[styles.button, style]}>
      {isLoading ? loader() : button()}
    </View>
    )
}
const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

    backgroundColor: Colors.SignGreen,
    shadowColor: Colors.SignGreen,
    shadowOpacity:0.4,
    shadowOffset:{ height: 10, width:10 },
    shadowRadius: 20

  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Colors.white
  }


})

export default Button
