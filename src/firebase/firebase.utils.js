import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDfC0_gxDVZGGWPvkRaIR9nkiLynwBkR-o",
    authDomain: "crown-db-4c093.firebaseapp.com",
    databaseURL: "https://crown-db-4c093.firebaseio.com",
    projectId: "crown-db-4c093",
    storageBucket: "crown-db-4c093.appspot.com",
    messagingSenderId: "9279442470",
    appId: "1:9279442470:web:75770e241b2503be2aa0e7",
    measurementId: "G-WZJBWWM175"
  };


  firebase.initializeApp(config);

  export const auth =  firebase.auth();
  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;