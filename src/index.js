import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const firebaseConfig = {
  apiKey: "AIzaSyADFfeCFE7Sej8GQPdPpQWU3o8wQkc_1Nk",
  authDomain: "vinoteac.firebaseapp.com",
  projectId: "vinoteac",
  storageBucket: "vinoteac.appspot.com",
  messagingSenderId: "267646528284",
  appId: "1:267646528284:web:b2a425a12c5861f7ee68d9"
};
const app = initializeApp(firebaseConfig);