import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI4MaVCguaXIPjCGUwtnopqy1RcqVLhRU",
  authDomain: "project-520691586924290735.firebaseapp.com",
  projectId: "project-520691586924290735",
  storageBucket: "project-520691586924290735.appspot.com",
  messagingSenderId: "703524828848",
  appId: "1:703524828848:web:31b60dc842e6f459322d75"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};