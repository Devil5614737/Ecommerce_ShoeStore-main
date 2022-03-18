
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbDKxooT1EdGmog-RZsroA3GbE6gRxrfc",
  authDomain: "shoe-store-96483.firebaseapp.com",
  projectId: "shoe-store-96483",
  storageBucket: "shoe-store-96483.appspot.com",
  messagingSenderId: "116938088975",
  appId: "1:116938088975:web:3781f23163c4c0e92f397a",
  measurementId: "G-7Z7PMFXSK9"
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const  auth=getAuth(app) ;

