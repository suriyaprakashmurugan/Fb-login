import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCZZ-A9iZkTaJU4j9dywnv0cAu6D5M9w34",
    authDomain: "mail-login-8235f.firebaseapp.com",
    projectId: "mail-login-8235f",
    storageBucket: "mail-login-8235f.appspot.com",
    messagingSenderId: "575960166077",
    appId: "1:575960166077:web:07d44cef4191aa136111d4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export {auth, googleProvider, fbProvider, githubProvider} ;
