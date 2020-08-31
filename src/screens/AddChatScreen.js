import React, { useContext,useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import ButtonWithBackground from '../components/ButtonWithBackground'
import FormInput from '../components/FormInput';
import firestore from '@react-native-firebase/firestore';
import Colors from '../utils/Colors'
import Button from '../components/Buttons'

function AddChatScreen ({navigation}){
  const [groupName, setGroupName] = useState('');


  function createGroup () {
    if (groupName.length > 0) {
      firestore()
        .collection('groups')
        .add({
          name: groupName,
          latestMessage: {
            text: `You have joined the room ${groupName}.`,
            createdAt: new Date().getTime()
          }
        })
        .then(docRef => {
          docRef.collection('MESSAGES').add ({
            text: `You have joined the room ${groupName}.`,
            createdAt: new Date().getTime(),
            system: true
          })
          navigation.navigate('Home')
        });
    }


  }


    return(
        <View style={styles.container}>
          <Text style={styles.text} >Create new Chat</Text>
          <FormInput
            value={groupName}
            placeholderText='Enter Chat Name . . .'
            onChangeText={groupTitle => setGroupName(groupTitle)}
            autoCapitalize='none'
            autoCorrect={false}
            color='white'
            />
          <Button
            title='Create Group'
            onPress={() => createGroup()}
          />
        </View>



    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.theme
  },
  text: {
    fontSize: 20,
    color: Colors.SignGreen,
    marginBottom: 100
  }
});


export default AddChatScreen;
