import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDjqBHr6XywKXxkPv4QfgQQ6lPIilJgDWo",
  authDomain: "valfred-340c1.firebaseapp.com",
  projectId: "valfred-340c1",
  storageBucket: "valfred-340c1.appspot.com",
  messagingSenderId: "1048136828528",
  appId: "1:1048136828528:web:c75baa4fb3b3a91a1156b5"
      })
export const getFirestoreDB = () => {
    return firebase.firestore(app);
}