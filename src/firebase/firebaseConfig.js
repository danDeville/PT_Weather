// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxu0Jk8qoyvyNCektfAY7GUdOJ09QPIYk",
  authDomain: "pt-weather-32dd8.firebaseapp.com",
  projectId: "pt-weather-32dd8",
  storageBucket: "pt-weather-32dd8.appspot.com",
  messagingSenderId: "200790701867",
  appId: "1:200790701867:web:74a0638a1218422fe8776e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const facebook = new FacebookAuthProvider()
const google = new GoogleAuthProvider()
const DB = getFirestore()

export {
  app,
  facebook,
  google,
  DB
}