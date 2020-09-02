import React, { useState,useEffect, useContext } from 'react'
import { View, StyleSheet,ActivityIndicator } from 'react-native'
import { GiftedChat,Bubble, Send,SystemMessage  } from 'react-native-gifted-chat'
import { IconButton } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../navigation/AuthProvider'
import Colors from '../utils/Colors'


export default function RoomScreen ({ route })  {
  const { user }= useContext(AuthContext)
  const currentUser = user.toJSON()
  const { thread } = route.params
  const [messages, setMessages] = useState([])


  useEffect(() => {
    const messagesListener = firestore ()
      .collection('groups')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot=> {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data()

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData
          }

          if (!firebaseData.system) {
              data.user = {
                ...firebaseData.user,
                name: firebaseData.user.email
              }
          }

          return data
        })
         setMessages(messages)

      })
      return () => messagesListener()
}, [])







  async function handleSend(messages) {
    const { text } = messages[0]
    firestore()
      .collection('groups')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email
        }
      })
        await firestore()
          .collection('groups')
          .doc(thread._id)
          .set (
              { latestMessage: {
                text,
                createdAt: new Date().getTime()
              }
            },
            { merge: true }
          )
    }

  function renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />

    )

  }

  function renderBubble(props) {

    return (
      <Bubble
        {...props}
        wrapperStyle={{
                right: {
                  backgroundColor: Colors.purple
                }
            }}
        textStyle={{
                right: {
                  color: Colors.white
                }
            }}
      />
    )

  }
  function renderSend(props) {

    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color={Colors.purple} />
        </View>
      </Send>

    )

  }
  function scrollToBottomComponent() {
    return (
      <View style={styles.scrollComponent}>
        <IconButton icon="chevron-double-down" size={32} color={Colors.purple}  />
      </View>

    )


  }
  function renderLoading() {
    return (
      <View style={styles.loadingComponent}>
        <ActivityIndicator size="large" color={Colors.SignGreen} />
      </View>

    )


  }

    return (
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          onSend={handleSend}
          user={{ _id: currentUser.uid }}
          renderBubble={renderBubble}
          placeholder="Type your wisdom words here..."
          showUserAvatar
          alwaysShowSend
          renderSystemMessage={renderSystemMessage}
          renderSend={renderSend}
          scrollToBottomComponent={scrollToBottomComponent}
          renderLoading={renderLoading}
          scrollToBottom
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.theme
    },
    systemMessageText: {
      fontSize: 14,
      color:'#fff',
      fontWeight: 'bold'
    },
    systemMessageWrapper: {
         backgroundColor: '#6646ee',
         borderRadius: 4,
         padding: 5
      },
    sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    scrollComponent: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  })
