import React from 'react';
import {StyleSheet, View, Text} from 'react-native'


function ChatScreen (){

    return(
        <View style={styles.container}>
          <Text style={styles.text} >  Chat Screen </Text>
        </View>



    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121111'
  },
  text: {
    fontSize: 20,
    color: '#219653',
    marginBottom: 100
  }
});


export default ChatScreen;
