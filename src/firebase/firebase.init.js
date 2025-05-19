// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeSF6R5TvAcrjYIisGGgOAWjrHtx9M91o",
  authDomain: "coffee-store-app-d8ba1.firebaseapp.com",
  projectId: "coffee-store-app-d8ba1",
  storageBucket: "coffee-store-app-d8ba1.firebasestorage.app",
  messagingSenderId: "543483890723",
  appId: "1:543483890723:web:bd9f71e257e800f1917596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);