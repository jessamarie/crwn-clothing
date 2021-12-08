import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('D0knxvaxKXjh2okgX6qn')
  .collection('cartItems')
  .doc('7cUhWBOChIuVf4dTiLis');

firestore.doc('/users/D0knxvaxKXjh2okgX6qn/cartItems/7cUhWBOChIuVf4dTiLis');
firestore.collection('/users/D0knxvaxKXjh2okgX6qn/cartItems/');
