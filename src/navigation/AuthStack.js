import  React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import auth from '@react-native-firebase/auth'
import Colors from '../utils/Colors'

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
         title: 'WALLIUM',
         headerStyle: {
           backgroundColor: Colors.theme,
         },
         headerRight: null,
         headerTintColor: "#35089e",
         headerTitleStyle: {
           alignSelf: 'center',
           fontWeight: 'bold',
         },
       }}
       />

    </Stack.Navigator>

  );
}
