import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHKiaQ5meQ1jGBYV9CODOw187OrfQ5XBA",
    authDomain: "chitchat-55e40.firebaseapp.com",
    projectId: "chitchat-55e40",
    storageBucket: "chitchat-55e40.appspot.com",
    messagingSenderId: "935475372344",
    appId: "1:935475372344:web:be984e717bcb04edf821cd",
    measurementId: "G-VMED7FCNG0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider};
