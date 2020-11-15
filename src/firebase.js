import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLxnbucRrkNF4279MPRjfM-Ra3QUMoscg",
  authDomain: "whatsapp-fake-b7d78.firebaseapp.com",
  databaseURL: "https://whatsapp-fake-b7d78.firebaseio.com",
  projectId: "whatsapp-fake-b7d78",
  storageBucket: "whatsapp-fake-b7d78.appspot.com",
  messagingSenderId: "490080386800",
  appId: "1:490080386800:web:7c6cd201c95a6a7dc38c35",
  measurementId: "G-3YGDKRPY3C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
