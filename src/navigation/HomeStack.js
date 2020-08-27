import  React, {useContext, useLayoutEffect} from 'react';
import { Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import Images from '../constants/Images'
import ButtonWithBackground from '../components/ButtonWithBackground'
import AddChatScreen from '../screens/AddChatScreen';
import RoomScreen from '../screens/RoomScreen';
import { IconButton } from 'react-native-paper';
import Colors from '../utils/Colors'


const Stack = createStackNavigator();





export default function HomeStack({navigation}) {
const {logout } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home'
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle:"WALLIUM",
        headerTitleStyle: {
           color: Colors.purple,
           alignSelf: 'center'
         },
         headerStyle: {
           borderBottomColor: Colors.SignGreen,
           borderBottomWidth: 1,
           backgroundColor: Colors.theme,
                 },
         headerLeft: () => (
           <IconButton
             onPress={() => logout()}
             icon='account-arrow-left'
             color='#ffffff'
           />
         ),
         headerRight: () => (
           <IconButton
             icon='message-plus'
             onPress = {() => navigation.navigate('AddChatScreen', {screen: {AddChatScreen}}) }
             size={24}
             color='#ffffff'
           />
         ),
      })
    }
      />
      <Stack.Screen
          name='AddChatScreen'
          component={AddChatScreen}
          options={({ navigation }) => ({
                    headerTitle: "WALLIUM",
                    headerStyle: {
                      backgroundColor: Colors.theme,
                    },
                    headerLeft: null,
                    headerRight: () => (
                      <IconButton
                        icon='close-circle'
                        size={28}
                        color='white'
                        onPress={() => navigation.goBack()}
                      />
                  )})
                }
                />
    <Stack.Screen
        name='RoomScreen'
        component={RoomScreen}
        options={({ navigation, route }) => ({
                  title: route.params.thread.name,
                  headerTitleStyle:{
                    alignSelf: 'flex-end',
                    color: Colors.purple,
                  },
                  headerStyle: {
                    backgroundColor: Colors.theme,
                  },
                  headerRight: null,
                  headerLeft: () => (
                    <IconButton
                      icon='arrow-left'
                      size={28}
                      color= 'white'
                      onPress={() => navigation.goBack()}
                    />
                )})
              }
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
