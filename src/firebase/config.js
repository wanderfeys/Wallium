import firebase from "firebase/app"
import "firebase/firestore"
require('firebase/auth');
const config = {
  apiKey: "AIzaSyD_ff21-koPwCI9xW3ITS8_zdAM5HXan3A",
  authDomain: "wallium-a1cd1.firebaseapp.com",
  databaseURL: "https://wallium-a1cd1.firebaseio.com",
  projectId: "wallium-a1cd1",
  storageBucket: "wallium-a1cd1.appspot.com",
  messagingSenderId: "545724410194",
  appId: "1:545724410194:web:ed6562b6b1a85f3c38b28b",
  measurementId: "G-E00NN4FVCK"
  };


  firebase.initializeApp(config)

  export const firestore = firebase.firestore()
  export const db = app.database();
