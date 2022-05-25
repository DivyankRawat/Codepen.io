import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkKivfo_xP3TSQAp0tGJztXNp-Ft_YHds",
    authDomain: "codepen-b7227.firebaseapp.com",
    projectId: "codepen-b7227",
    storageBucket: "codepen-b7227.appspot.com",
    messagingSenderId: "647673126741",
    appId: "1:647673126741:web:a25ce3117624d8f3f199dc",
    measurementId: "G-F7SYVH4V5P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);