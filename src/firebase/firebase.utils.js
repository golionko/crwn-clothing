import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDApbibyTHo7R0zfRT9V-Bb2uAl-D3ImS8",
    authDomain: "crwm-db-3191f.firebaseapp.com",
    databaseURL: "https://crwm-db-3191f.firebaseio.com",
    projectId: "crwm-db-3191f",
    storageBucket: "crwm-db-3191f.appspot.com",
    messagingSenderId: "1037715389462",
    appId: "1:1037715389462:web:7ff13b882e9fc61efc0937"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;