import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyByvhIp7OKZCm9D-vhKWFu7eCIlWb5MkB8",
  authDomain: "bizboost-app-ef2fc.firebaseapp.com",
  projectId: "bizboost-app-ef2fc",
  storageBucket: "bizboost-app-ef2fc.appspot.com",
  messagingSenderId: "112831399137",
  appId: "1:112831399137:web:9dc5b5be75f9d7f19e23a0"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { auth, firebaseApp, firebase, firestore};