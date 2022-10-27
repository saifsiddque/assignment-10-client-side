// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkEn_WmveSGry2xF59prpyR_LrXqiqKSc" ,
  authDomain: "assignment-10-3df80.firebaseapp.com",
  projectId: "assignment-10-3df80",
  storageBucket: "assignment-10-3df80.appspot.com",
  messagingSenderId: "37207122609",
  appId: "1:37207122609:web:84c505c692b927623ef890"


  // apiKey:process.env.REACT_APP_NO_apiKey,
  // authDomain:process.env.REACT_APP_NO_authDomain,
  // projectId:process.env.REACT_APP_NO_projectId,
  // storageBucket:process.env.REACT_APP_NO_storageBucket,
  // messagingSenderId:process.env.REACT_APP_NO_messagingSenderId,
  // appId:process.env.REACT_APP_NO_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;