import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

export default function Loading () {

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#6646ee" />
    </View>
  )


}

 const styles = StyleSheet.create({
   loadingContainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: Colors.theme

   }

 })
