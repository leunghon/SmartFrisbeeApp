import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDn1YkzwwM-38EXwljeNbaFY5A52IyXXwY",
  authDomain: "project6-168ik.firebaseapp.com",
  databaseURL: "https://project6-168ik-default-rtdb.firebaseio.com",
  projectId: "project6-168ik",
  storageBucket: "project6-168ik.appspot.com",
  messagingSenderId: "967860305491",
  appId: "1:967860305491:android:59e8b3a5544e12afce10a6",
  //measurementId: "" // your measurementId here if available
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default firebase;
