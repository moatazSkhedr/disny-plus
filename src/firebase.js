

// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAWDD2lXvrO8HA9EUkMTpRZMfPGnfd2LmE",
  authDomain: "disney-colon.firebaseapp.com",
  projectId: "disney-colon",
  storageBucket: "disney-colon.appspot.com",
  messagingSenderId: "730771533472",
  appId: "1:730771533472:web:209e3abc786a8d544023c5",
  measurementId: "G-G89PFYHEVY"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;