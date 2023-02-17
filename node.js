// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoO8bqbl4jZwbR3ZRiytxdilpumboWj_Q",
  authDomain: "video-chat-e057b.firebaseapp.com",
  databaseURL: "https://video-chat-e057b-default-rtdb.firebaseio.com",
  projectId: "video-chat-e057b",
  storageBucket: "video-chat-e057b.appspot.com",
  messagingSenderId: "1015672852250",
  appId: "1:1015672852250:web:47a4de59e0460c8cb626a3",
  measurementId: "G-5RK5X7JRMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);