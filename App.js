import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

export default function App() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();



  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title='Stahni busy'></Button>
      <Text>-----</Text>
      <Button title='Z databaze'></Button>
      <Text>-----</Text>
      <Button title='Nedrivejsi spoj'></Button>
      <Text>-----</Text>
      <Button title='Notifikace'></Button>
      <Text>-----</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
