import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFYJJ4T9fg8SamJMQcYQ3gvLCPKZwGog",
  authDomain: "trvelour.firebaseapp.com",
  projectId: "trvelour",
  storageBucket: "trvelour.appspot.com",
  messagingSenderId: "894195392222",
  appId: "1:894195392222:web:c0ebeae5d0c5e86c2bac4f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};