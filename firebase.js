import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtNSXBvWsiHV-rCXPmJzLjsbnr-85u9Gs",
  authDomain: "whatsapp-clone-eef12.firebaseapp.com",
  projectId: "whatsapp-clone-eef12",
  storageBucket: "whatsapp-clone-eef12.appspot.com",
  messagingSenderId: "150382178465",
  appId: "1:150382178465:web:5f71d90d2d511b7054c0e0",
  measurementId: "G-62T8Q3SRNB",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
