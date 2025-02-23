// firebase.js  
import { initializeApp } from "firebase/app";  
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
    apiKey: "AIzaSyDKCKNHBgHIBkyY1PUlIE2RWQCt5unWakg",
    authDomain: "portfolio-d81c2.firebaseapp.com",
    databaseURL: "https://portfolio-d81c2-default-rtdb.firebaseio.com",
    projectId: "portfolio-d81c2",
    storageBucket: "portfolio-d81c2.firebasestorage.app",
    messagingSenderId: "633580350253",
    appId: "1:633580350253:web:9cbe1cae4cdf9f1e2e81a4",
    measurementId: "G-CBNTSS7SZQ"
  };

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);  

export { db };