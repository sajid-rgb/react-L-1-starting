/* eslint-disable import/no-anonymous-default-export */
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBved91ONO9ksR8wmY3SQ1mEAeT4Gk1nxI",
  authDomain: "fir-app-c559f.firebaseapp.com",
  projectId: "fir-app-c559f",
  storageBucket: "fir-app-c559f.appspot.com",
  messagingSenderId: "115284201793",
  appId: "1:115284201793:web:4b3f1437f85578c6cc51c0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export default {
  firebase,
  db,
  auth
}