import React, { useContext,useLayoutEffect,useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import Images from '../constants/Images'
import ButtonWithBackground from '../components/ButtonWithBackground'
import { IconButton, Divider,List } from 'react-native-paper';
import Loading from '../components/Loading';
import firestore from '@react-native-firebase/firestore';
import Colors from '../utils/Colors'

export default function HomeScreen({navigation}) {
    const [threads,setThreads] = useState([])
    const [loading,setLoading] = useState(true)
    const { user } = useContext(AuthContext);

    useEffect(() => {
    const unsubscribe = firestore()
      .collection('groups')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data()
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }







    return (
            <View style={styles.container}>
                <FlatList
                  data={threads}
                  keyExtractor={item => item._id}
                  ItemSeparatorComponent={() => <Divider />}
                  renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress = {() => navigation.navigate('RoomScreen', {thread: item})} >
                      <List.Item
                        title={item.name}
                        description='Group description'
                        titleNumberOfLines={1}
                        titleStyle={styles.listTitle}
                        descriptionStyle={styles.listDescription}
                        left={props => <List.Icon {...props} icon="chat" color='white' style={styles.iconStyle} />}
                        descriptionNumberOfLines={1}
                      />
                  </TouchableOpacity>
                    )}
                  />
          </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme
  },
  text: {
    fontSize: 20,
    color: Colors.SignGreen,
    marginBottom: 100
  },
  listTitle: {
    borderTopColor: Colors.white,
    borderTopWidth: 1,
    color: Colors.white,
    fontSize: 22
  },
  listDescription: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    color: Colors.white,
    fontSize: 16
  },
  iconStyle: {
    borderColor: Colors.SignGreen,
    borderWidth: 1,
  }
});
