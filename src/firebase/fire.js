import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_I7pWGqNdXzvatYT9LCZaRTCetM6shiU",
  authDomain: "loginregisterapp-d73a5.firebaseapp.com",
  projectId: "loginregisterapp-d73a5",
  storageBucket: "loginregisterapp-d73a5.appspot.com",
  messagingSenderId: "549121968821",
  appId: "1:549121968821:web:75a55dae28496fc75b4cfc",
};

// Initialize Firebase
const fireConfig = firebase.initializeApp(firebaseConfig);
export default fireConfig;
