import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDP4ThTAEXn6fC7uM4QmjHFrpMgupcoQug",
  authDomain: "log-demo-eca85.firebaseapp.com",
  databaseURL: "https://log-demo-eca85-default-rtdb.firebaseio.com",
  projectId: "log-demo-eca85",
  storageBucket: "log-demo-eca85.appspot.com",
  messagingSenderId: "913052159148",
  appId: "1:913052159148:web:7e901156e3bc3ea881a309",
  measurementId: "G-N5N2436SEG"
};

const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//notfication
// export const initializeFirebase = () => {
//   firebase.initializeApp({
//     messagingSenderId: "913052159148"
//   });
// }
