// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3K4XqjQZNwbzPR39A7qA6JzEvSsf14Es",
    authDomain: process.env.REACT_APP_authDomain,
    projectId: "dragon--news",
    storageBucket: "dragon--news.appspot.com",
    messagingSenderId: "551604040583",
    appId: "1:551604040583:web:596b7b8855e0b2ecaa5922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;