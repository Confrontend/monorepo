// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { RefObject, MouseEvent } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKL2hycnOqGfNOxotcJ3Eh3NUJ4EIpTaQ",
  authDomain: "react-usa-data-charts.firebaseapp.com",
  projectId: "react-usa-data-charts",
  storageBucket: "react-usa-data-charts.appspot.com",
  messagingSenderId: "987329263180",
  appId: "1:987329263180:web:1d30aa7427de9d26b0e6e9",
  measurementId: "G-SNQF6S9MVG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase
export const initializeFirebase = () => {
  return { app, analytics };
};

export const signIn = async (
  e: MouseEvent<HTMLInputElement>,
  email: RefObject<HTMLInputElement>,
  password: RefObject<HTMLInputElement>
) => {
  const mappedEmail = email.current?.value?.toLocaleLowerCase().trim() || "";

  e.preventDefault();
  try {
    await signInWithEmailAndPassword(
      auth,
      mappedEmail,
      password.current?.value || ""
    );
  } catch (err: any) {
    console.error(err);
    alert(`${err.message} Please contact the developer and ask for an Account`);
  }
};

export const signOut = () => auth.signOut();
