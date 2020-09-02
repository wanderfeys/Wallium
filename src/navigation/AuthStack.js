import  React from 'react'
import { createStackNavigator  } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'

import Colors from '../utils/Colors'

const Stack = createStackNavigator()


export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
         title: 'WALLIUM',
         headerStyle: {
           backgroundColor: Colors.theme
         },
         headerRight: null,
         headerTintColor: "#35089e",
         headerTitleStyle: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'flex-end',
           fontWeight: 'bold'
         }
       }}
      />

    </Stack.Navigator>

  )
}
