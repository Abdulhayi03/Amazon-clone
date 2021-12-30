import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

  
  apiKey: "AIzaSyDRPfeE5SZnhkjN0mfXPBGdGDuwQYIK-eQ",
  authDomain: "clone-d7974.firebaseapp.com",
  databaseURL: "https://clone-d7974.firebaseio.com",
  projectId: "clone-d7974",
  storageBucket: "clone-d7974.appspot.com",
  messagingSenderId: "478554104001",
  appId: "1:478554104001:web:961266c4a9dfd8b5a4b440",
  measurementId: "G-XQ8DHZX5XM"


});

const auth = firebase.auth();

export { auth };