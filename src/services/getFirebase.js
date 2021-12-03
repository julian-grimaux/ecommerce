import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADxOCLh0TrX-_-QkB7_NDOcZtcZyRCk8k",
  authDomain: "ecommerce-da018.firebaseapp.com",
  projectId: "ecommerce-da018",
  storageBucket: "ecommerce-da018.appspot.com",
  messagingSenderId: "238701807993",
  appId: "1:238701807993:web:cd79d6d341415d6d2fc7a8"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
