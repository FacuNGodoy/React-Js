import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhht52_0GyMsrKkSEffjLzpPmBuQ7dzac",
  authDomain: "coderhouse-ecommerce-f2b2f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f2b2f",
  storageBucket: "coderhouse-ecommerce-f2b2f.appspot.com",
  messagingSenderId: "612606677938",
  appId: "1:612606677938:web:ff6ff6871d2c760cf28aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
