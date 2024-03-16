// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Kgu5SatLPNRKTOjkphwlTU9YUvXCpCA",
  authDomain: "brainwave-b4595.firebaseapp.com",
  projectId: "brainwave-b4595",
  storageBucket: "brainwave-b4595.appspot.com",
  messagingSenderId: "845285499614",
  appId: "1:845285499614:web:49ccec98c612643b18d84f",
  measurementId: "G-FXSCQG8N3V",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
