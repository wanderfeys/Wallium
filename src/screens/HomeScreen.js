import React, { useContext,useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import Images from '../constants/Images'
import ButtonWithBackground from '../components/ButtonWithBackground'
import ChatScreen from '../screens/ChatScreen';

export default function HomeScreen({navigation}) {

    const { user,logout } = useContext(AuthContext);
    useLayoutEffect(() => {

    navigation.setOptions({
      headerTitleStyle: {
         color: 'white',
         alignSelf: 'flex-end'
       },
       headerStyle: {
                 backgroundColor: '#35089e',
               },
       headerLeft: () => (
         <ButtonWithBackground
           onPress={() => logout()}
           image={Images.logout}
         />
       ),
       headerRight: () => (
         <ButtonWithBackground
           onPress = {() => navigation.navigate('ChatScreen', {screen: {ChatScreen}}) }
           image={Images.add}
         />
       ),
    });
  }, [navigation]);


    return (
      <View style={styles.container}>
        <Text style={styles.text}>   Welcome to Wallium</Text>
        <Text style={styles.text}>  {user.email}</Text>
      </View>
      );
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
