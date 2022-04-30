// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRdp6diwE4wiWKmD2cm0RWR1uwI-T5eRc",
    authDomain: "mmohunter.firebaseapp.com",
    databaseURL: "https://mmohunter-default-rtdb.firebaseio.com",
    projectId: "mmohunter",
    storageBucket: "mmohunter.appspot.com",
    messagingSenderId: "360225559621",
    appId: "1:360225559621:web:c130ca9bf97d802e0dbf2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;