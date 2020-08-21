import  React, {useContext, useLayoutEffect} from 'react';
import { Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import Images from '../constants/Images'
import ButtonWithBackground from '../components/ButtonWithBackground'
import ChatScreen from '../screens/ChatScreen';



const Stack = createStackNavigator();





export default function HomeStack({navigation}) {


  return (
    <Stack.Navigator>
      <Stack.Screen name='Home'
      component={HomeScreen}
      />
      <Stack.Screen
          name='ChatScreen'
          component={ChatScreen}
          options={{
             title: 'Chat',
             headerStyle: {
               backgroundColor: '#35089e',
             },
             headerTintColor: '#219653',
             headerTitleStyle: {
               alignSelf: 'flex-end',
               fontWeight: 'bold',
             },
           }}
      />

    </Stack.Navigator>
  );
}
/*
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
         onPress = {() => RootNavigation.navigate('ChatScreen', {screen: {ChatScreen}}) }
         image={Images.add}
       />
     ),
  })
  }
*/
