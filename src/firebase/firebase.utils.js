import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1y2WeokXzen17tXDJWwoe9FL3g0aF_7Y",
    authDomain: "store-db-cf9fe.firebaseapp.com",
    databaseURL: "https://store-db-cf9fe.firebaseio.com",
    projectId: "store-db-cf9fe",
    storageBucket: "",
    messagingSenderId: "905129560980",
    appId: "1:905129560980:web:5dec03bfe92313d4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;