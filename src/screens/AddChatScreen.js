import React, { useContext,useLayoutEffect,useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import ButtonWithBackground from '../components/ButtonWithBackground'
import FormInput from '../components/FormInput';
import firestore from '@react-native-firebase/firestore';
import Colors from '../utils/Colors'

function AddChatScreen ({navigation}){
  const [groupName, setGroupName] = useState('');


  function createGroup () {
    if (groupName.length > 0) {
      firestore()
        .collection('groups')
        .add({
          name: groupName
        })
        .then(() => {
          navigation.navigate('Home')
          console.log('Group added!');
        });
    }


  }


    return(
        <View style={styles.container}>
          <Text style={styles.text} >Create new Chat</Text>
          <FormInput
            value={groupName}
            placeholderText='Group Name'
            onChangeText={groupTitle => setGroupName(groupTitle)}
            autoCapitalize='none'
            autoCorrect={false}
            color='white'
            />
          <FormButton
            buttonTitle='Create Group'
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
