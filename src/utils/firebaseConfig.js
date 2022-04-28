// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFfeCFE7Sej8GQPdPpQWU3o8wQkc_1Nk",
  authDomain: "vinoteac.firebaseapp.com",
  projectId: "vinoteac",
  storageBucket: "vinoteac.appspot.com",
  messagingSenderId: "267646528284",
  appId: "1:267646528284:web:b2a425a12c5861f7ee68d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;