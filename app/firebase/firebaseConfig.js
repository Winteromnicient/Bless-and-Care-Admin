import { initializeApp } from "firebase/app";

// firebaseConfig.js
export const firebaseConfig = {
    apiKey: "AIzaSyDNN2gN0lYCrRMGtUCkMuYJkTDdT0K1MW8",
    authDomain: "bless-care-foundation.firebaseapp.com",
    projectId: "bless-care-foundation",
    storageBucket: "bless-care-foundation.appspot.com",
    messagingSenderId: "269553469853",
    appId: "1:269553469853:web:dcd93bf0d0f93282944774",
    measurementId: "G-WTELM1ZK89"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  

  export { firebaseApp };
  
