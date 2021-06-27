import firebase from 'firebase/app';

// these are automatically attached to ^ firebase when imported.
import 'firebase/firestore';
import 'firebase/auth'

// Firebase in JavaScript uses public keys, no need to worry about hiding it
const config = {
    apiKey: "AIzaSyDfoQxAhlHesxLCLRzN_X8CQUQcxHImNiE",
    authDomain: "crwn-db-7d5e4.firebaseapp.com",
    projectId: "crwn-db-7d5e4",
    storageBucket: "crwn-db-7d5e4.appspot.com",
    messagingSenderId: "127459944545",
    appId: "1:127459944545:web:b3e40d1d49519e331da220",
    measurementId: "G-KHK6YTF78T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Always trigger the google popup whenever we use it for auth and signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;