import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCO6-9HNwr_bdAgOBVHmXJmT0ulWrV4IG8",
    authDomain: "evernote-clone-gs.firebaseapp.com",
    databaseURL: "https://evernote-clone-gs.firebaseio.com",
    projectId: "evernote-clone-gs",
    storageBucket: "evernote-clone-gs.appspot.com",
    messagingSenderId: "829828675074",
    appId: "1:829828675074:web:76b1eb2496e59969f5d91b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase