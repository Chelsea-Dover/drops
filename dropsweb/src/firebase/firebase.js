import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBZx_4JwS2FjXEafulW9SVyOSOrNqhnyNw",
  authDomain: "drops-f0c8d.firebaseapp.com",
  databaseURL: "https://drops-f0c8d.firebaseio.com",
  projectId: "drops-f0c8d",
  storageBucket: "drops-f0c8d.appspot.com",
  messagingSenderId: "667415897370"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
