import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyM7sSdzcxDVLv-2Qaw-ZRKX5jP2hM2zM",
    authDomain: "shakib-facebook-clone-365464.firebaseapp.com",
    projectId: "shakib-facebook-clone-365464",
    storageBucket: "shakib-facebook-clone-365464.appspot.com",
    messagingSenderId: "676172560236",
    appId: "1:676172560236:web:32ada40a14b16967096549"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;