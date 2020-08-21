import  React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import auth from '@react-native-firebase/auth'


const Stack = createStackNavigator();


export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signup'
      component={SignUpScreen}
      options={{
         title: 'SignUp',
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
