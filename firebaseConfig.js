// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbp6sa5pXytbgeT4Qtr0IeRaUnzbskAY8",
  authDomain: "quasar-webengi.firebaseapp.com",
  projectId: "quasar-webengi",
  storageBucket: "quasar-webengi.appspot.com",
  messagingSenderId: "148340253826",
  appId: "1:148340253826:web:ecf86947479a9ee2e9809b",
  measurementId: "G-YF2L4DNC78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
