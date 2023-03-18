// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5_IfWO7hxQeN6yQBz5L8GyrgobFjdgmo",
  authDomain: "franky-981bf.firebaseapp.com",
  projectId: "franky-981bf",
  storageBucket: "franky-981bf.appspot.com",
  messagingSenderId: "120879014475",
  appId: "1:120879014475:web:fc1bf839b2f776dde1a3ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
