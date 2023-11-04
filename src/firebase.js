import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs60LD9PsHIcK2qBUb4FQsAqPe8IU5xsw",
    authDomain: "facebook-clone-5c616.firebaseapp.com",
    projectId: "facebook-clone-5c616",
    storageBucket: "facebook-clone-5c616.appspot.com",
    messagingSenderId: "593947744958",
    appId: "1:593947744958:web:fa202b1f53da8c694fdcef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;