import firebase from 'firebase/compat/app';

// these are automatically attached to ^ firebase when imported.
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Firebase in JavaScript uses public keys, no need to worry about hiding it
const config = {
  apiKey: 'AIzaSyDfoQxAhlHesxLCLRzN_X8CQUQcxHImNiE',
  authDomain: 'crwn-db-7d5e4.firebaseapp.com',
  projectId: 'crwn-db-7d5e4',
  storageBucket: 'crwn-db-7d5e4.appspot.com',
  messagingSenderId: '127459944545',
  appId: '1:127459944545:web:b3e40d1d49519e331da220',
  measurementId: 'G-KHK6YTF78T',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Always trigger the google popup whenever we use it for auth and signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
